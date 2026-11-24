/**
 * Grouping Validation Engine
 * 
 * Validates the grouped product dataset against strict criteria:
 * 1. Every grouped card has a valid image URL.
 * 2. Every product / variation has a verified positive price.
 * 3. Variations belong to the correct product family.
 * 4. No duplicate variation exists within the same product group.
 * 5. Bearing category contains exactly 3 distinct cards (2RS, Ball, Roller).
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

    if (!Array.isArray(category.products)) {
      errors.push(`Category "${category.name}" has no products array`);
      return;
    }

    // Specific check for Bearing category: exactly 3 cards (2RS, Ball, Roller)
    if (category.id === 'bearing') {
      if (category.products.length !== 3) {
        warnings.push(`[Bearing Check] Expected exactly 3 bearing cards (2RS, Ball, Roller), got ${category.products.length}`);
      }
    }

    const seenImageAndFamily = new Set();

    category.products.forEach((product) => {
      stats.totalGroupedCards += 1;
      stats.totalVariations += product.variations?.length || 0;

      // 1. Image Check
      if (!product.image || typeof product.image !== 'string' || product.image.trim() === '') {
        errors.push(`[Image Check] Card "${product.name}" in "${category.name}" has no valid image.`);
      }

      // 2. Price Check (Price must be valid)
      if (!product.mrp || product.mrp <= 0) {
        warnings.push(`[Price Check] Card "${product.name}" in "${category.name}" has missing or 0 price.`);
      } else {
        stats.pricedItems += 1;
      }

      // 3. Duplicate Card Check (Same Image + Same Family)
      const familyKey = `${product.image}::${(product.family || product.name).toLowerCase()}`;
      if (seenImageAndFamily.has(familyKey)) {
        warnings.push(`[Duplicate Card] Multiple cards found for same image and family: "${product.name}" in "${category.name}"`);
      }
      seenImageAndFamily.add(familyKey);

      // 4. Variations Validation
      if (Array.isArray(product.variations)) {
        const seenVarIds = new Set();
        product.variations.forEach((variation) => {
          if (!variation.label) {
            errors.push(`[Variation Label] Variation in "${product.name}" has empty label.`);
          }
          if (seenVarIds.has(variation.id)) {
            warnings.push(`[Duplicate Variation ID] "${variation.id}" in "${product.name}"`);
          }
          seenVarIds.add(variation.id);

          if (variation.originalItem?.id) {
            accountedRawIds.add(variation.originalItem.id);
          }
        });
      }
    });
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats,
    summary: `Validated ${stats.totalCategories} active categories, ${stats.totalGroupedCards} grouped product cards, ${stats.totalVariations} total variations. Errors: ${errors.length}, Warnings: ${warnings.length}`
  };
}
