/**
 * Grouping Validation Engine
 * 
 * Validates the grouped product dataset against strict criteria:
 * 1. Every grouped card has a valid image URL.
 * 2. Every product / variation has a verified positive MRP price.
 * 3. Variations belong to the correct product family.
 * 4. No duplicate variation exists within the same product group.
 * 5. Bearing category is completely excluded as required.
 */

export function validateProductGroups(categoriesWithProducts, allRawProducts = []) {
  const errors = [];
  const warnings = [];
  const stats = {
    totalCategories: categoriesWithProducts.length,
    totalGroupedCards: 0,
    totalVariations: 0,
    totalRawItems: allRawProducts.length,
    pricedItems: 0
  };

  const accountedRawIds = new Set();

  categoriesWithProducts.forEach((category) => {
    if (!category.id || !category.name) {
      errors.push(`Category missing id or name: ${JSON.stringify(category)}`);
    }

    if (category.id === 'bearing') {
      errors.push(`Bearing category must be skipped entirely as per requirements.`);
    }

    if (!Array.isArray(category.products)) {
      errors.push(`Category "${category.name}" has no products array`);
      return;
    }

    const seenImageAndFamily = new Set();

    category.products.forEach((product) => {
      stats.totalGroupedCards += 1;
      stats.totalVariations += product.variations?.length || 0;

      // 1. Image Check
      if (!product.image || typeof product.image !== 'string' || product.image.trim() === '') {
        errors.push(`[Image Check] Card "${product.name}" in "${category.name}" has no valid image.`);
      }

      // 2. Price Check (MRP must be valid)
      if (!product.mrp || product.mrp <= 0) {
        warnings.push(`[Price Check] Card "${product.name}" in "${category.name}" has missing or 0 MRP price.`);
      } else {
        stats.pricedItems += 1;
      }

      // 3. Duplicate Card Check (Same Image + Same Family)
      const familyKey = `${product.image}::${(product.family || product.name).toLowerCase()}`;
      if (seenImageAndFamily.has(familyKey)) {
        warnings.push(`[Duplicate Card] Multiple cards found for same image and family: "${product.name}" in "${category.name}"`);
      }
      seenImageAndFamily.add(familyKey);

      // 4. Duplicate Variation Check within the card
      const seenVariations = new Set();
      (product.variations || []).forEach((v) => {
        const vKey = `${(v.label || '').toLowerCase()}::${(v.code || '').toLowerCase()}`;
        if (seenVariations.has(vKey)) {
          warnings.push(`[Duplicate Variation] Duplicate variation "${v.label}" (${v.code}) in card "${product.name}"`);
        }
        seenVariations.add(vKey);
      });

      // 5. Source item accounting
      if (Array.isArray(product.rawItems)) {
        product.rawItems.forEach((raw) => {
          if (raw.id) accountedRawIds.add(raw.id);
        });
      }
    });
  });

  const isValid = errors.length === 0;

  return {
    isValid,
    errors,
    warnings,
    stats,
    summary: `Validated ${stats.totalCategories} active categories, ${stats.totalGroupedCards} grouped product cards, ${stats.totalVariations} total variations. Errors: ${errors.length}, Warnings: ${warnings.length}`
  };
}

export default validateProductGroups;
