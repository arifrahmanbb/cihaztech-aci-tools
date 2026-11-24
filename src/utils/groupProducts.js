/**
 * Critical Product Grouping Logic with Verified MRP Pricing
 * 
 * - Groups multiple variations sharing the same image & product family into ONE card.
 * - Retains separate cards for distinct visual models.
 * - Attaches authentic MRP prices to both the card (range or single) and each variation.
 * - Strictly excludes TP prices.
 */

/**
 * Determine the user-friendly variation heading for a group.
 */
export function getVariationHeading(variations, family = '') {
  if (!variations || variations.length === 0) return 'Available Options';

  if (family && /bearing/i.test(family)) {
    return 'Available Specifications';
  }

  let hasSizes = false;
  let hasWeights = false;
  let hasSpecs = false;

  for (const v of variations) {
    const text = `${v.label} ${v.spec || ''}`.toLowerCase();
    if (/(?:inch|"|mm|m\b|guide bar|blade|size)/i.test(text)) {
      hasSizes = true;
    } else if (/(?:kg|lb|pound|gram)/i.test(text)) {
      hasWeights = true;
    } else if (/(?:hp|watt|\bw\b|kva|bar|rpm|volt|liter|\bl\b)/i.test(text)) {
      hasSpecs = true;
    }
  }

  if (hasSizes) return 'Available Sizes';
  if (hasWeights) return 'Available Weights';
  if (hasSpecs) return 'Available Specifications';
  return 'Available Models';
}

/**
 * Clean and normalize a variation label, code, and MRP price.
 */
export function normalizeVariation(rawVar, index) {
  let rawLabel = (rawVar.spec || rawVar.label || rawVar.name || rawVar.model || '').trim();
  let code = (rawVar.code || '').trim();
  const mrp = Number(rawVar.mrp) || 0;

  // If label has trailing parenthesized code matching code, e.g. "4 Inch (J026)"
  const parenMatch = rawLabel.match(/^(.*?)\s*\(([^)]+)\)$/);
  if (parenMatch) {
    const insideParen = parenMatch[2].trim();
    if (!code) {
      code = insideParen;
    }
    if (code.toLowerCase() === insideParen.toLowerCase()) {
      rawLabel = parenMatch[1].trim();
    }
  }

  // Fallback: If label is empty, use model or code
  if (!rawLabel) {
    rawLabel = rawVar.model || code || `Model ${index + 1}`;
  }

  return {
    id: rawVar.id || `var-${index}`,
    label: rawLabel,
    code: code || null,
    spec: rawVar.spec || rawLabel,
    mrp: mrp,
    priceFormatted: mrp > 0 ? `৳ ${mrp.toLocaleString('en-IN')}` : '',
    originalItem: rawVar
  };
}

/**
 * Group raw products into e-commerce product cards.
 * 
 * @param {Array} rawProducts - Flat array of all product entries
 * @param {string} [categoryId] - Optional category filter
 * @returns {Array} Array of grouped product cards with MRP pricing
 */
export function groupProducts(rawProducts, categoryId = null) {
  const filtered = categoryId
    ? rawProducts.filter((p) => p.categoryId === categoryId)
    : rawProducts;

  const groupsMap = new Map();

  filtered.forEach((item) => {
    // Unique key: category + image + family
    const imageKey = item.image ? item.image.trim() : 'no-image';
    const familyKey = (item.family || item.name || 'product').trim().toLowerCase();
    const groupKey = `${item.categoryId}::${imageKey}::${familyKey}`;

    if (!groupsMap.has(groupKey)) {
      let displayName = item.name;
      let model = item.model || '';

      if (item.categoryId === 'bearing') {
        displayName = `ACI Bearing (${item.model || 'Series'})`;
      } else if (item.family === 'Adjustable Wrench (Non Grip)') {
        displayName = 'ACI Adjustable Wrench (Non Grip)';
      } else if (item.family === 'Adjustable Wrench (Grip)') {
        displayName = 'ACI Adjustable Wrench (Grip)';
      } else if (item.family === 'Pipe Wrench') {
        displayName = 'ACI Heavy Duty Pipe Wrench';
      } else if (item.family === 'Screwdriver (NH-Flat)') {
        displayName = 'ACI Screwdriver (NH-Flat)';
      } else if (item.family === 'Screwdriver (NH-Star)') {
        displayName = 'ACI Screwdriver (NH-Star)';
      } else if (item.family === 'Screwdriver (H-Flat)') {
        displayName = 'ACI Screwdriver (H-Flat)';
      } else if (item.family === 'Screwdriver (H-Star)') {
        displayName = 'ACI Screwdriver (H-Star)';
      } else if (item.family === 'Combination Pliers') {
        displayName = 'ACI Combination Pliers';
      } else if (item.family === 'Cutting Pliers') {
        displayName = 'ACI Cutting Pliers';
      } else if (item.family === 'Nose Pliers') {
        displayName = 'ACI Nose Pliers';
      } else if (item.family === 'Ball Pein Hammer') {
        displayName = 'ACI Drop Forged Ball Pein Hammer';
      } else if (item.family === 'Angle Grinder') {
        displayName = 'ACI Smart Angle Grinder';
      } else if (item.family === 'Drill Machine') {
        displayName = 'ACI Smart Drill Machine';
      } else if (item.family === 'Air Compressor') {
        displayName = 'ACI Industrial Air Compressor';
      } else if (item.family === 'Concrete Vibrator Motor') {
        displayName = 'ACI Smart Concrete Vibrator Motor';
      } else if (item.family === 'Concrete Vibrator Nozzle') {
        displayName = 'ACI Smart Concrete Vibrator Nozzle';
      } else if (item.family === 'Diamond Cutting Disc') {
        displayName = 'ACI Smart Diamond Cutting Disc';
      } else if (item.family === 'Measuring Tape') {
        displayName = 'ACI Steel Measuring Tape';
      } else if (item.family === 'Blower') {
        displayName = 'ACI Smart Air Blower';
      } else if (item.family === 'Chain Saw') {
        displayName = 'ACI Smart Gasoline Chain Saw';
      }

      groupsMap.set(groupKey, {
        id: `grouped-${item.categoryId}-${familyKey.replace(/[^a-z0-9]+/g, '-')}-${groupsMap.size + 1}`,
        categoryId: item.categoryId,
        name: displayName,
        model: model,
        family: item.family || item.name,
        image: item.image,
        code: item.code || null,
        spec: item.spec || null,
        originalUrl: item.originalUrl || '',
        variations: [],
        rawItems: []
      });
    }

    const group = groupsMap.get(groupKey);
    group.rawItems.push(item);

    // Normalize variation
    const normalized = normalizeVariation(item, group.variations.length);

    // Deduplicate identical variations within the same group
    const isDuplicate = group.variations.some(
      (v) => v.label.toLowerCase() === normalized.label.toLowerCase() && v.code === normalized.code
    );

    if (!isDuplicate) {
      group.variations.push(normalized);
    }
  });

  // Post-process groups: compute pricing display and flags
  return Array.from(groupsMap.values()).map((group) => {
    const variationHeading = getVariationHeading(group.variations, group.family);
    const hasMeaningfulVariations =
      group.variations.length > 1 ||
      (group.variations.length === 1 &&
        group.variations[0].label &&
        group.variations[0].label.toLowerCase() !== group.name.toLowerCase());

    // Compute price range across all variations
    const prices = group.variations.map((v) => v.mrp).filter((p) => p > 0);
    const minMrp = prices.length > 0 ? Math.min(...prices) : (Number(group.rawItems[0]?.mrp) || 0);
    const maxMrp = prices.length > 0 ? Math.max(...prices) : minMrp;

    let priceDisplay = '';
    if (minMrp > 0) {
      if (minMrp === maxMrp) {
        priceDisplay = `৳ ${minMrp.toLocaleString('en-IN')}`;
      } else {
        priceDisplay = `৳ ${minMrp.toLocaleString('en-IN')} – ৳ ${maxMrp.toLocaleString('en-IN')}`;
      }
    }

    return {
      ...group,
      variationHeading,
      hasMultipleVariations: group.variations.length > 1,
      hasMeaningfulVariations,
      mrp: minMrp,
      priceDisplay,
      totalVariations: group.variations.length
    };
  });
}

/**
 * Return all categories with their grouped product cards.
 * 
 * @param {Array} categoriesList
 * @param {Array} rawProducts
 * @returns {Array} Categories array with products attached
 */
export function getCategoriesWithGroupedProducts(categoriesList, rawProducts) {
  return categoriesList.map((cat) => {
    const grouped = groupProducts(rawProducts, cat.id);
    return {
      ...cat,
      products: grouped,
      totalGroupedProducts: grouped.length,
      totalRawProducts: rawProducts.filter((p) => p.categoryId === cat.id).length
    };
  });
}
