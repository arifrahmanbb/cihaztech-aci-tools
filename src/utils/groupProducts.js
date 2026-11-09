/**
 * Critical Product Grouping Logic
 * 
 * RULE A: SAME IMAGE = SAME PRODUCT CARD
 * If multiple product entries share the same product image and represent
 * variations of the same product family, display only ONE product card.
 * Under that card, display all available variations as a structured list.
 * 
 * RULE B: DIFFERENT IMAGE = DIFFERENT PRODUCT CARD
 * If a product has a genuinely different product image or visually distinct model,
 * create a separate product card.
 * 
 * RULE C: NEVER MERGE DIFFERENT PRODUCT FAMILIES
 * Do not group products only because their names are similar.
 * Do not merge different product types.
 * Use the original product image, product identity, model information,
 * and source data together to determine grouping.
 */

/**
 * Determine the user-friendly variation heading for a group.
 * Examples: "Available Sizes", "Available Weights", "Available Specifications", "Available Models".
 */
export function getVariationHeading(variations, family = '') {
  if (!variations || variations.length === 0) return 'Available Variations';

  const familyLower = family.toLowerCase();
  if (familyLower.includes('bearing')) return 'Available Specifications';

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
  return 'Available Variations';
}

/**
 * Clean and normalize a variation label and code so redundant code tags
 * like "4 Inch (J026) (J026)" never happen.
 */
export function normalizeVariation(rawVar, index) {
  let rawLabel = (rawVar.spec || rawVar.label || rawVar.name || rawVar.model || '').trim();
  let code = (rawVar.code || '').trim();

  // If label has trailing parenthesized code matching code, e.g. "4 Inch (J026)"
  const parenMatch = rawLabel.match(/^(.*?)\s*\(([^)]+)\)$/);
  if (parenMatch) {
    const insideParen = parenMatch[2].trim();
    if (!code) {
      code = insideParen;
    }
    // If the paren matched the code, strip it from the label so code isn't duplicated
    if (code.toLowerCase() === insideParen.toLowerCase()) {
      rawLabel = parenMatch[1].trim();
    }
  }

  // Fallback: If label is empty, use model or code
  if (!rawLabel) {
    rawLabel = rawVar.model || code || `Variant ${index + 1}`;
  }

  return {
    id: rawVar.id || `var-${index}`,
    label: rawLabel,
    code: code || null,
    spec: rawVar.spec || rawLabel,
    originalItem: rawVar
  };
}

/**
 * Group raw products according to Rules A, B, and C.
 * 
 * @param {Array} rawProducts - Flat array of all product entries
 * @param {string} [categoryId] - Optional category filter
 * @returns {Array} Array of grouped product cards
 */
export function groupProducts(rawProducts, categoryId = null) {
  const filtered = categoryId
    ? rawProducts.filter((p) => p.categoryId === categoryId)
    : rawProducts;

  const groupsMap = new Map();

  filtered.forEach((item, index) => {
    // Unique key: category + image + family
    const imageKey = item.image ? item.image.trim() : 'no-image';
    const familyKey = (item.family || item.name || 'product').trim().toLowerCase();
    const groupKey = `${item.categoryId}::${imageKey}::${familyKey}`;

    if (!groupsMap.has(groupKey)) {
      // Clean display name and model
      let displayName = item.name;
      let model = item.model || '';

      if (item.categoryId === 'bearing') {
        if (/2rs/i.test(item.family) || /2rs/i.test(item.name)) {
          displayName = 'ACI Bearing (2RS)';
          model = '2RS';
        } else if (/ball/i.test(item.family) || /ball/i.test(item.name)) {
          displayName = 'ACI Bearing (Ball)';
          model = 'Ball';
        } else if (/roller/i.test(item.family) || /roller/i.test(item.name)) {
          displayName = 'ACI Bearing (Roller)';
          model = 'Roller';
        } else {
          displayName = 'ACI Bearing';
        }
      } else if (item.family === 'Pipe Wrench') {
        displayName = 'ACI Heavy Duty Pipe Wrench';
      } else if (item.family === 'Screwdriver') {
        displayName = 'ACI Screwdriver';
      } else if (item.family === 'Pliers') {
        displayName = 'ACI High Leverage Pliers';
      } else if (item.family === 'Ball Pein Hammer') {
        displayName = 'ACI Drop Forged Ball Pein Hammer';
      } else if (item.family === 'Angle Grinder') {
        displayName = 'ACI Smart Angle Grinder';
      } else if (item.family === 'Drill Machine') {
        displayName = 'ACI Smart Drill Machine';
      } else if (item.family === 'Air Compressor') {
        displayName = 'ACI Air Compressor';
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

  // Post-process groups: compute headings and flags
  return Array.from(groupsMap.values()).map((group) => {
    const variationHeading = getVariationHeading(group.variations, group.family);
    const hasMeaningfulVariations =
      group.variations.length > 1 ||
      (group.variations.length === 1 &&
        group.variations[0].label &&
        group.variations[0].label.toLowerCase() !== group.name.toLowerCase());

    return {
      ...group,
      variationHeading,
      hasVariations: hasMeaningfulVariations,
      variationCount: group.variations.length
    };
  });
}

/**
 * Builds the complete list of categories populated with their grouped product cards.
 * 
 * @param {Array} categoriesList
 * @param {Array} allRawProducts
 * @returns {Array} Categories with .products holding grouped cards
 */
export function getCategoriesWithGroupedProducts(categoriesList, allRawProducts) {
  return categoriesList.map((category) => {
    const grouped = groupProducts(allRawProducts, category.id);
    return {
      ...category,
      products: grouped,
      totalGroupedCount: grouped.length,
      totalRawItemsCount: grouped.reduce((acc, p) => acc + (p.rawItems?.length || 1), 0)
    };
  });
}

export default groupProducts;
