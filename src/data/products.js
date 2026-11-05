// ACI Smart Tools – Product Data
// Source: https://acimotors-bd.com/products/other-machinery/aci-smart-tools
// All categories, subcategories, product names, images and URLs are taken
// directly from the official ACI Motors website.

const BASE = 'https://acimotors-bd.com/';

/** @type {Array<import('../types').Category>} */
const categories = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. Power Tools
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'power-tools',
    name: 'Power Tools',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools',
    coverImage: BASE + 'assets/images/product/powert-tools/power-tools-cover.jpg',
    subcategories: [],
    products: [
      // Angle Grinder
      { id: 'pt-1',  name: 'ACI Smart Angle Grinder (4")',   code: 'J026', image: BASE + 'assets/images/product/powert-tools/grinder.png',   originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-2',  name: 'ACI Smart Angle Grinder (4")',   code: 'J027', image: BASE + 'assets/images/product/powert-tools/grinder.png',   originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-3',  name: 'ACI Smart Angle Grinder (7")',   code: 'J140', image: BASE + 'assets/images/product/powert-tools/grinder.png',   originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      // Drill Machine
      { id: 'pt-4',  name: 'ACI Smart Drill Machine – Electric Drill',      code: 'J031', image: BASE + 'assets/images/product/powert-tools/drill.png',    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-5',  name: 'ACI Smart Drill Machine – Rotary Hammer Drill', code: 'J032', image: BASE + 'assets/images/product/powert-tools/drill.png',    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-6',  name: 'ACI Smart Drill Machine – Impact Drill',        code: 'J033', image: BASE + 'assets/images/product/powert-tools/drill.png',    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-7',  name: 'ACI Smart Drill Machine – Impact Drill',        code: 'J034', image: BASE + 'assets/images/product/powert-tools/drill.png',    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      // Electric Router
      { id: 'pt-8',  name: 'ACI Smart Electric Router (2200W)',   code: 'J030', image: BASE + 'assets/images/product/powert-tools/e-router.png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      // Hot Air Gun
      { id: 'pt-9',  name: 'ACI Smart Hot Air Gun (2000W)',       code: 'J141', image: BASE + 'assets/images/product/powert-tools/a-gun.jpg',    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      // Electric Planer
      { id: 'pt-10', name: 'ACI Smart Electric Planer (600W)',    code: 'J029', image: BASE + 'assets/images/product/powert-tools/plner.png',   originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      // Circular Saw
      { id: 'pt-11', name: 'ACI Smart Circular Saw Machine (9")', code: 'J143', image: BASE + 'assets/images/product/powert-tools/c-saw.jpg',   originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      // Chain Saw
      { id: 'pt-12', name: 'ACI Smart Chain Saw (18")',           code: 'J144', image: BASE + 'assets/images/product/powert-tools/saw.png',     originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-13', name: 'ACI Smart Chain Saw (20")',           code: 'J190', image: BASE + 'assets/images/product/powert-tools/saw.png',     originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-14', name: 'ACI Smart Chain Saw (22")',           code: 'J191', image: BASE + 'assets/images/product/powert-tools/saw.png',     originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      // Blower
      { id: 'pt-15', name: 'ACI Smart Blower (800W)',             code: 'J028', image: BASE + 'assets/images/product/powert-tools/blower-1.png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-16', name: 'ACI Smart Blower (600W)',             code: 'J067', image: BASE + 'assets/images/product/powert-tools/blower-1.png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      // Welding Machine
      { id: 'pt-17', name: 'ACI Smart Welding Machine MMA 200 (5.6 KVA)',   code: 'MMA 200',    image: BASE + 'assets/images/product/smart-tools/mma200.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
      { id: 'pt-18', name: 'ACI Smart Welding Machine TIG/MMA 250 (7 KVA)', code: 'TIG/MMA 250', image: BASE + 'assets/images/product/smart-tools/mma250.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Hand Tools
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'hand-tools',
    name: 'Hand Tools',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
    coverImage: BASE + 'assets/images/hand-tools-new.jpg',
    subcategories: ['Screwdriver', 'Wrench', 'Plier', 'Hammer', 'Measuring Tape', 'Hacksaw', 'Spanner', 'Combination Spanner', 'Open End Spanner'],
    products: [
      // Screwdrivers
      { id: 'ht-1',  name: 'ACI Screwdriver (8")',   code: 'J072', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-2',  name: 'ACI Screwdriver (10")',  code: 'J073', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-3',  name: 'ACI Screwdriver (6")',   code: 'J074', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-4',  name: 'ACI Screwdriver (8")',   code: 'J075', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-5',  name: 'ACI Screwdriver (10")',  code: 'J076', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-6',  name: 'ACI Screwdriver (6")',   code: 'J077', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-7',  name: 'ACI Screwdriver (8")',   code: 'J078', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-8',  name: 'ACI Screwdriver (6")',   code: 'J079', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-9',  name: 'ACI Screwdriver (10")',  code: 'J080', image: BASE + 'assets/images/screwdriver-m.jpg', subcategory: 'Screwdriver', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Wrenches
      { id: 'ht-10', name: 'ACI Wrench (10")',  code: 'J081', image: BASE + 'assets/images/wrench-m.jpg', subcategory: 'Wrench', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-11', name: 'ACI Wrench (12")',  code: 'J082', image: BASE + 'assets/images/wrench-m.jpg', subcategory: 'Wrench', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-12', name: 'ACI Wrench (8")',   code: 'J083', image: BASE + 'assets/images/wrench-m.jpg', subcategory: 'Wrench', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-13', name: 'ACI Wrench (10")',  code: 'J084', image: BASE + 'assets/images/wrench-m.jpg', subcategory: 'Wrench', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-14', name: 'ACI Wrench (12")',  code: 'J085', image: BASE + 'assets/images/wrench-m.jpg', subcategory: 'Wrench', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-15', name: 'ACI Wrench (10")',  code: 'J086', image: BASE + 'assets/images/wrench-m.jpg', subcategory: 'Wrench', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-16', name: 'ACI Wrench (12")',  code: 'J087', image: BASE + 'assets/images/wrench-m.jpg', subcategory: 'Wrench', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Pliers
      { id: 'ht-17', name: 'ACI Plier (8")',    code: 'J088', image: BASE + 'assets/images/pillars-m.jpg', subcategory: 'Plier', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-18', name: 'ACI Plier (8")',    code: 'J089', image: BASE + 'assets/images/pillars-m.jpg', subcategory: 'Plier', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-19', name: 'ACI Plier (8")',    code: 'J090', image: BASE + 'assets/images/pillars-m.jpg', subcategory: 'Plier', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-20', name: 'ACI Plier (8")',    code: 'J091', image: BASE + 'assets/images/pillars-m.jpg', subcategory: 'Plier', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Hammers
      { id: 'ht-21', name: 'ACI Hammer (500g)',  code: 'J096', image: BASE + 'assets/images/hammer-m.jpg', subcategory: 'Hammer', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-22', name: 'ACI Hammer (1000g)', code: 'J097', image: BASE + 'assets/images/hammer-m.jpg', subcategory: 'Hammer', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-23', name: 'ACI Hammer (1500g)', code: 'J098', image: BASE + 'assets/images/hammer-m.jpg', subcategory: 'Hammer', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-24', name: 'ACI Hammer (500g)',  code: 'J099', image: BASE + 'assets/images/hammer-m.jpg', subcategory: 'Hammer', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-25', name: 'ACI Hammer (1000g)', code: 'J100', image: BASE + 'assets/images/hammer-m.jpg', subcategory: 'Hammer', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Measuring Tape
      { id: 'ht-26', name: 'ACI Measuring Tape (3M)',  code: 'J101', image: BASE + 'assets/images/measure-m.jpg', subcategory: 'Measuring Tape', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-27', name: 'ACI Measuring Tape (5M)',  code: 'J102', image: BASE + 'assets/images/measure-m.jpg', subcategory: 'Measuring Tape', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-28', name: 'ACI Measuring Tape (7.5M)',code: 'J103', image: BASE + 'assets/images/measure-m.jpg', subcategory: 'Measuring Tape', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-29', name: 'ACI Measuring Tape (10M)', code: 'J104', image: BASE + 'assets/images/measure-m.jpg', subcategory: 'Measuring Tape', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-30', name: 'ACI Measuring Tape (3M)',  code: 'J105', image: BASE + 'assets/images/measure-m.jpg', subcategory: 'Measuring Tape', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-31', name: 'ACI Measuring Tape (5M)',  code: 'J106', image: BASE + 'assets/images/measure-m.jpg', subcategory: 'Measuring Tape', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-32', name: 'ACI Measuring Tape (7.5M)',code: 'J107', image: BASE + 'assets/images/measure-m.jpg', subcategory: 'Measuring Tape', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-33', name: 'ACI Measuring Tape (10M)', code: 'J108', image: BASE + 'assets/images/measure-m.jpg', subcategory: 'Measuring Tape', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Hacksaw
      { id: 'ht-34', name: 'ACI Hacksaw (12")',   code: 'J109', image: BASE + 'assets/images/product/hand-tools/hacksaw-1.png', subcategory: 'Hacksaw', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-35', name: 'ACI Hacksaw Blade',   code: 'J110', image: BASE + 'assets/images/product/hand-tools/hacksaw-1.png', subcategory: 'Hacksaw', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Ring Spanner sets
      { id: 'ht-36', name: 'ACI Ring Spanner Set (8–17mm)', code: 'J111', image: BASE + 'assets/images/product/hand-tools/1.png', subcategory: 'Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-37', name: 'ACI Ring Spanner Set',           code: 'J112', image: BASE + 'assets/images/product/hand-tools/1(1).png', subcategory: 'Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-38', name: 'ACI Ring Spanner (13–18mm)',     code: 'J113', image: BASE + 'assets/images/product/hand-tools/13-18-inch.png', subcategory: 'Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-39', name: 'ACI Ring Spanner (8–17mm)',      code: 'J114', image: BASE + 'assets/images/product/hand-tools/ring-spanner-8-17-inch.png', subcategory: 'Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Combination Spanner
      { id: 'ht-40', name: 'ACI Combination Spanner (10–17mm)', code: 'J115', image: BASE + 'assets/images/product/hand-tools/10-17-inch.png', subcategory: 'Combination Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Open End Spanner
      { id: 'ht-41', name: 'ACI Open End Spanner', code: 'J116', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-42', name: 'ACI Open End Spanner', code: 'J117', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-43', name: 'ACI Open End Spanner', code: 'J118', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-44', name: 'ACI Open End Spanner', code: 'J119', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-45', name: 'ACI Open End Spanner', code: 'J120', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-46', name: 'ACI Open End Spanner', code: 'J121', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-47', name: 'ACI Open End Spanner', code: 'J122', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-48', name: 'ACI Open End Spanner', code: 'J123', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-49', name: 'ACI Open End Spanner', code: 'J124', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-50', name: 'ACI Open End Spanner', code: 'J125', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-51', name: 'ACI Open End Spanner', code: 'J126', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-52', name: 'ACI Open End Spanner', code: 'J127', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-53', name: 'ACI Open End Spanner', code: 'J128', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-54', name: 'ACI Open End Spanner', code: 'J129', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-55', name: 'ACI Open End Spanner', code: 'J130', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-56', name: 'ACI Open End Spanner', code: 'J131', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-57', name: 'ACI Open End Spanner', code: 'J132', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-58', name: 'ACI Open End Spanner', code: 'J133', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-59', name: 'ACI Open End Spanner', code: 'J134', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-60', name: 'ACI Open End Spanner', code: 'J135', image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png', subcategory: 'Open End Spanner', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      // Additional hand tool types
      { id: 'ht-61', name: 'ACI Hand Tool (1)',  code: 'J145', image: BASE + 'assets/images/product/hand-tools/1(2).png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-62', name: 'ACI Hand Tool (2)',  code: 'J146', image: BASE + 'assets/images/product/hand-tools/1(2).png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-63', name: 'ACI Hand Tool (3)',  code: 'J147', image: BASE + 'assets/images/product/hand-tools/1(2).png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-64', name: 'ACI Hand Tool (4)',  code: 'J148', image: BASE + 'assets/images/product/hand-tools/1(2).png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-65', name: 'ACI Hand Tool (5)',  code: 'J149', image: BASE + 'assets/images/product/hand-tools/1(2).png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
      { id: 'ht-66', name: 'ACI Hand Tool (6)',  code: 'J150', image: BASE + 'assets/images/product/hand-tools/1(2).png', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. ACI Weight Scale
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'aci-weight-scale',
    name: 'ACI Weight Scale',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1',
    coverImage: BASE + 'assets/images/product/powert-tools/weight-cover.jpg',
    subcategories: [],
    products: [
      { id: 'ws-1',  name: 'ACI Weight Scale – ACS-796',         code: 'J054', image: BASE + 'assets/images/product/weight/new-images/aci-acs-796.jpg',    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-2',  name: 'ACI Weight Scale – ACS-A1(268B)',    code: 'J053', image: BASE + 'assets/images/product/weight/new-images/aci-acsa1268b.jpg',   originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-3',  name: 'ACI Weight Scale – 30 kg',            code: 'J055', image: BASE + 'assets/images/product/weight/new-images/30kg.jpg',            originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-4',  name: 'ACI Weight Scale – 30 kg Classic',   code: 'J056', image: BASE + 'assets/images/product/weight/new-images/30kg-classic.jpg',    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-5',  name: 'ACI Weight Scale – 40 kg',            code: 'J057', image: BASE + 'assets/images/product/weight/new-images/40kg.jpg',            originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-6',  name: 'ACI Weight Scale – 40 kg Classic',   code: 'J058', image: BASE + 'assets/images/product/weight/new-images/40kg-classic.jpg',    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-7',  name: 'ACI Weight Scale – 60 kg',            code: 'J059', image: BASE + 'assets/images/product/weight/new-images/60kg.jpg',            originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-8',  name: 'ACI Weight Scale – 100 kg',           code: 'J060', image: BASE + 'assets/images/product/weight/new-images/100kg.jpg',           originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-9',  name: 'ACI Weight Scale – 200 kg',           code: 'J061', image: BASE + 'assets/images/product/weight/new-images/200kg.jpg',           originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-10', name: 'ACI Weight Scale – 300 kg',           code: 'J062', image: BASE + 'assets/images/product/weight/new-images/300kg.jpg',           originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-11', name: 'ACI Weight Scale – 500 kg',           code: 'J165', image: BASE + 'assets/images/weight-500.jpg',                                originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
      { id: 'ws-12', name: 'ACI Weight Scale – 1000 kg',          code: 'J166', image: BASE + 'assets/images/weight-1000.jpg',                               originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-weight-scale1' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. ACI Air Compressor
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'aci-air-compressor',
    name: 'ACI Air Compressor',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1',
    coverImage: BASE + 'assets/images/compressor-models.jpg',
    subcategories: [],
    products: [
      { id: 'ac-1',  name: 'ACI Air Compressor – 24L',   code: 'AC-24L',  image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-2',  name: 'ACI Air Compressor – 40L',   code: 'AC-40L',  image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-3',  name: 'ACI Air Compressor – 60L',   code: 'AC-60L',  image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-4',  name: 'ACI Air Compressor – 100L',  code: 'AC-100L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-5',  name: 'ACI Air Compressor – 150L',  code: 'AC-150L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-6',  name: 'ACI Air Compressor – 200L',  code: 'AC-200L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-7',  name: 'ACI Air Compressor – 250L',  code: 'AC-250L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-8',  name: 'ACI Air Compressor – 300L',  code: 'AC-300L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-9',  name: 'ACI Air Compressor – 350L',  code: 'AC-350L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-10', name: 'ACI Air Compressor – 400L',  code: 'AC-400L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-11', name: 'ACI Air Compressor – 500L',  code: 'AC-500L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-12', name: 'ACI Air Compressor – 600L',  code: 'AC-600L', image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
      { id: 'ac-13', name: 'ACI Air Compressor – 1000L', code: 'AC-1000L',image: BASE + 'assets/images/compressor-models.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. Vibrator Motor & Nozzle
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'vibrator-motor-nozzle',
    name: 'Vibrator Motor & Nozzle',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/vibrator-motor-and-nozzle',
    coverImage: BASE + 'assets/images/product/others/viibrator/vibrator-cover.jpg',
    subcategories: [],
    products: [
      { id: 'vm-1', name: 'ACI Smart Concrete Vibrator Motor – 2 HP', code: 'J063', image: BASE + 'assets/images/product/others/viibrator/vibrator-motor.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/vibrator-motor-and-nozzle' },
      { id: 'vm-2', name: 'ACI Smart Concrete Vibrator Motor – 3 HP', code: 'J064', image: BASE + 'assets/images/product/others/viibrator/vibrator-motor.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/vibrator-motor-and-nozzle' },
      { id: 'vm-3', name: 'ACI Smart Concrete Vibrator Nozzle (38×6M)', code: 'J065', image: BASE + 'assets/images/product/others/viibrator/nozzel.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/vibrator-motor-and-nozzle' },
      { id: 'vm-4', name: 'ACI Smart Concrete Vibrator Nozzle (45×6M)', code: 'J066', image: BASE + 'assets/images/product/others/viibrator/nozzel.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/vibrator-motor-and-nozzle' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. High Pressure Washer
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'high-pressure-washer',
    name: 'High Pressure Washer',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/high-pressure-washer',
    coverImage: BASE + 'assets/images/acims.jpg',
    subcategories: [],
    products: [
      { id: 'hw-1', name: 'ACI Smart High Pressure Washer 1500W', code: 'J063', image: BASE + 'assets/images/product/others/smart-pressure/high-pressure-washer-2.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/high-pressure-washer' },
      { id: 'hw-2', name: 'ACI Smart High Pressure Washer 1200W', code: 'J068', image: BASE + 'assets/images/product/others/smart-pressure/high-pressure-washer-3.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/high-pressure-washer' },
      { id: 'hw-3', name: 'ACI Smart High Pressure Washer 8 kW',  code: 'J069', image: BASE + 'assets/images/product/others/smart-pressure/high-pressure-washer.jpg',   originalUrl: BASE + 'products/other-machinery/aci-smart-tools/high-pressure-washer' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. Hand Sprayer
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'hand-sprayer',
    name: 'Hand Sprayer',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-sprayer',
    coverImage: BASE + 'assets/images/product/others/smart-pressure/hand-spray.jpg',
    subcategories: [],
    products: [
      { id: 'hs-1', name: 'ACI Smart Hand Sprayer – 18L', code: 'J189', image: BASE + 'assets/images/product/others/smart-pressure/hand-spray.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-sprayer' },
      { id: 'hs-2', name: 'ACI Smart Hand Sprayer – 16L', code: 'J192', image: BASE + 'assets/images/hand-spray-m.jpg',                            originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-sprayer' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. Cutting Disc
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'cutting-disc',
    name: 'Cutting Disc',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/cutting-disc',
    coverImage: BASE + 'assets/images/product/others/viibrator/disc/disc-cover.jpg',
    subcategories: [],
    products: [
      { id: 'cd-1', name: 'ACI Smart Rod Cutting Disc 4"',     code: 'J136', image: BASE + 'assets/images/product/others/viibrator/disc/disc-1.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/cutting-disc' },
      { id: 'cd-2', name: 'ACI Smart Rod Cutting Disc 7"',     code: 'J137', image: BASE + 'assets/images/product/others/viibrator/disc/disc-2.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/cutting-disc' },
      { id: 'cd-3', name: 'ACI Smart Diamond Cutting Disc 4"', code: 'J138', image: BASE + 'assets/images/product/others/viibrator/disc/disc-3.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/cutting-disc' },
      { id: 'cd-4', name: 'ACI Smart Diamond Cutting Disc 7"', code: 'J139', image: BASE + 'assets/images/product/others/viibrator/disc/disc-3.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/cutting-disc' },
      { id: 'cd-5', name: 'ACI Smart Flap Disc',               code: 'J142', image: BASE + 'assets/images/product/others/viibrator/disc/disc-4.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/cutting-disc' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. Bearing
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'bearing',
    name: 'Bearing',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing',
    coverImage: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg',
    subcategories: ['2RS Series', 'Ball Bearing', 'Roller Bearing'],
    products: [
      // 2RS Series
      { id: 'br-1',  name: 'ACI Bearing 6201-2RS',       code: 'J000', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-2',  name: 'ACI Bearing 6201-2RS-RED',   code: 'J232', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-3',  name: 'ACI Bearing 6202-2RS',       code: 'J001', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-4',  name: 'ACI Bearing 6202-2RS-RED',   code: 'J233', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-5',  name: 'ACI Bearing 6203-2RS',       code: 'J002', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-6',  name: 'ACI Bearing 6203-2RS-RED',   code: 'J234', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-7',  name: 'ACI Bearing 6204-2RS',       code: 'J003', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-8',  name: 'ACI Bearing 6204-2RS-RED',   code: 'J235', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-9',  name: 'ACI Bearing 6205-2RS',       code: 'J004', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-10', name: 'ACI Bearing 6205-2RS-RED',   code: 'J236', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-11', name: 'ACI Bearing 6206-2RS',       code: 'J005', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-12', name: 'ACI Bearing 6207-2RS',       code: 'J006', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-13', name: 'ACI Bearing 6208-2RS',       code: 'J007', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-14', name: 'ACI Bearing 6209-2RS',       code: 'J008', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-15', name: 'ACI Bearing 6210-2RS',       code: 'J009', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-16', name: 'ACI Bearing 6211-2RS',       code: 'J010', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-17', name: 'ACI Bearing 6301-2RS',       code: 'J011', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-18', name: 'ACI Bearing 6302-2RS',       code: 'J012', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-19', name: 'ACI Bearing 6302-2RS-RED',   code: 'J237', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-20', name: 'ACI Bearing 6303-2RS',       code: 'J013', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-21', name: 'ACI Bearing 6304-2RS',       code: 'J014', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-22', name: 'ACI Bearing 6304-2RS-RED',   code: 'J238', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-23', name: 'ACI Bearing 6305-2RS',       code: 'J015', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-24', name: 'ACI Bearing 6306-2RS',       code: 'J016', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-25', name: 'ACI Bearing 6307-2RS',       code: 'J017', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-26', name: 'ACI Bearing 6308-2RS',       code: 'J018', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-27', name: 'ACI Bearing 6000-2RS',       code: 'J019', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-28', name: 'ACI Bearing 6001-2RS',       code: 'J020', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-29', name: 'ACI Bearing 6001-2RS-RED',   code: 'J239', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-30', name: 'ACI Bearing 6002-2RS',       code: 'J021', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-31', name: 'ACI Bearing 6003-2RS',       code: 'J022', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-32', name: 'ACI Bearing 6004-2RS',       code: 'J023', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-33', name: 'ACI Bearing 6004-2RS-RED',   code: 'J240', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-34', name: 'ACI Bearing 6005-2RS',       code: 'J024', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-35', name: 'ACI Bearing 6005-2RS-RED',   code: 'J241', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-36', name: 'ACI Bearing 6212-2RS',       code: 'J182', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-37', name: 'ACI Bearing 6214-2RS',       code: 'J183', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-38', name: 'ACI Bearing 6309-2RS',       code: 'J184', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-39', name: 'ACI Bearing 6310-2RS',       code: 'J185', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-40', name: 'ACI Bearing 6311-2RS',       code: 'J186', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-41', name: 'ACI Bearing 6312-2RS',       code: 'J187', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-42', name: 'ACI Bearing 6313-2RS',       code: 'J188', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-43', name: 'ACI Bearing 607-2RS',        code: 'J207', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-44', name: 'ACI Bearing 608-2RS',        code: 'J208', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-45', name: 'ACI Bearing 609-2RS',        code: 'J209', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-46', name: 'ACI Bearing 627-2RS',        code: 'J210', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-47', name: 'ACI Bearing 629-2RS',        code: 'J211', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-48', name: 'ACI Bearing 6200-2RS',       code: 'J227', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-49', name: 'ACI Bearing 6006-2RS',       code: 'J228', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-50', name: 'ACI Bearing 6904-2RS',       code: 'J229', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: '2RS Series', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      // Ball Bearings
      { id: 'br-51', name: 'ACI Bearing 6209-Ball', code: 'J230', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-52', name: 'ACI Bearing 6309-Ball', code: 'J231', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-53', name: 'ACI Bearing 6204-Ball', code: 'J172', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-54', name: 'ACI Bearing 6205-Ball', code: 'J173', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-55', name: 'ACI Bearing 6206-Ball', code: 'J174', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-56', name: 'ACI Bearing 6207-Ball', code: 'J175', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-57', name: 'ACI Bearing 6208-Ball', code: 'J176', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-58', name: 'ACI Bearing 6304-Ball', code: 'J177', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-59', name: 'ACI Bearing 6305-Ball', code: 'J178', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-60', name: 'ACI Bearing 6306-Ball', code: 'J179', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-61', name: 'ACI Bearing 6307-Ball', code: 'J180', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-62', name: 'ACI Bearing 6308-Ball', code: 'J181', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Ball Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      // Roller Bearings
      { id: 'br-63', name: 'ACI Bearing 30204-Roller', code: 'J212', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-64', name: 'ACI Bearing 30205-Roller', code: 'J213', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-65', name: 'ACI Bearing 30207-Roller', code: 'J214', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-66', name: 'ACI Bearing 30208-Roller', code: 'J215', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-67', name: 'ACI Bearing 30209-Roller', code: 'J216', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-68', name: 'ACI Bearing 32004-Roller', code: 'J217', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-69', name: 'ACI Bearing 32005-Roller', code: 'J218', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-70', name: 'ACI Bearing 32007-Roller', code: 'J219', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-71', name: 'ACI Bearing 32206-Roller', code: 'J220', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-72', name: 'ACI Bearing 32207-Roller', code: 'J221', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-73', name: 'ACI Bearing 32208-Roller', code: 'J222', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-74', name: 'ACI Bearing 30210-Roller', code: 'J223', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-75', name: 'ACI Bearing 32213-Roller', code: 'J224', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-76', name: 'ACI Bearing 32216-Roller', code: 'J225', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
      { id: 'br-77', name: 'ACI Bearing 48548/10-Roller', code: 'J226', image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg', subcategory: 'Roller Bearing', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing' },
    ],
  },
];

export default categories;

