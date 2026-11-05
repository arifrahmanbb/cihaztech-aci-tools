// ACI Smart Tools – Product Data
// Source: https://acimotors-bd.com/products/other-machinery/aci-smart-tools
// Clean structured data with NO unnecessary image duplicates.
// Products with identical images are cleanly grouped with their respective models, sizes, and specs.

const BASE = 'https://acimotors-bd.com/';

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
      {
        id: 'pt-grinder',
        name: 'ACI Smart Angle Grinder',
        image: BASE + 'assets/images/product/powert-tools/grinder.png',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools',
        variants: [
          { spec: '4 Inch (J026)', code: 'J026' },
          { spec: '4 Inch (J027)', code: 'J027' },
          { spec: '7 Inch (J140)', code: 'J140' }
        ]
      },
      {
        id: 'pt-drill',
        name: 'ACI Smart Drill Machine',
        image: BASE + 'assets/images/product/powert-tools/drill.png',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools',
        variants: [
          { spec: 'Electric Drill', code: 'J031' },
          { spec: 'Rotary Hammer Drill', code: 'J032' },
          { spec: 'Impact Drill (J033)', code: 'J033' },
          { spec: 'Impact Drill (J034)', code: 'J034' }
        ]
      },
      {
        id: 'pt-router',
        name: 'ACI Smart Electric Router (2200W)',
        code: 'J030',
        image: BASE + 'assets/images/product/powert-tools/e-router.png',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools'
      },
      {
        id: 'pt-gun',
        name: 'ACI Smart Hot Air Gun (2000W)',
        code: 'J141',
        image: BASE + 'assets/images/product/powert-tools/a-gun.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools'
      },
      {
        id: 'pt-planer',
        name: 'ACI Smart Electric Planer (600W)',
        code: 'J029',
        image: BASE + 'assets/images/product/powert-tools/plner.png',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools'
      },
      {
        id: 'pt-saw',
        name: 'ACI Smart Circular Saw Machine (9")',
        code: 'J143',
        image: BASE + 'assets/images/product/powert-tools/c-saw.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools'
      },
      {
        id: 'pt-chainsaw',
        name: 'ACI Smart Chain Saw',
        image: BASE + 'assets/images/product/powert-tools/saw.png',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools',
        variants: [
          { spec: '18 Inch', code: 'J144' },
          { spec: '20 Inch', code: 'J190' },
          { spec: '22 Inch', code: 'J191' }
        ]
      },
      {
        id: 'pt-blower',
        name: 'ACI Smart Blower',
        image: BASE + 'assets/images/product/powert-tools/blower-1.png',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools',
        variants: [
          { spec: '800W', code: 'J028' },
          { spec: '600W', code: 'J067' }
        ]
      },
      {
        id: 'pt-weld-mma200',
        name: 'ACI Smart Welding Machine MMA 200 (5.6 KVA)',
        code: 'MMA 200',
        image: BASE + 'assets/images/product/smart-tools/mma200.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools'
      },
      {
        id: 'pt-weld-mma250',
        name: 'ACI Smart Welding Machine TIG/MMA 250 (7 KVA)',
        code: 'TIG/MMA 250',
        image: BASE + 'assets/images/product/smart-tools/mma250.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/power-tools'
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Hand Tools
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'hand-tools',
    name: 'Hand Tools',
    originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
    coverImage: BASE + 'assets/images/hand-tools-new.jpg',
    subcategories: ['Screwdriver', 'Wrench', 'Plier', 'Hammer', 'Measuring Tape', 'Hacksaw', 'Spanners'],
    products: [
      {
        id: 'ht-screwdriver',
        name: 'ACI Screwdriver Series',
        image: BASE + 'assets/images/screwdriver-m.jpg',
        subcategory: 'Screwdriver',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
        variants: [
          { spec: '6 Inch (J074)', code: 'J074' },
          { spec: '6 Inch (J077)', code: 'J077' },
          { spec: '6 Inch (J079)', code: 'J079' },
          { spec: '8 Inch (J072)', code: 'J072' },
          { spec: '8 Inch (J075)', code: 'J075' },
          { spec: '8 Inch (J078)', code: 'J078' },
          { spec: '10 Inch (J073)', code: 'J073' },
          { spec: '10 Inch (J076)', code: 'J076' },
          { spec: '10 Inch (J080)', code: 'J080' }
        ]
      },
      {
        id: 'ht-wrench',
        name: 'ACI Heavy-Duty Wrench',
        image: BASE + 'assets/images/wrench-m.jpg',
        subcategory: 'Wrench',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
        variants: [
          { spec: '8 Inch (J083)', code: 'J083' },
          { spec: '10 Inch (J081)', code: 'J081' },
          { spec: '10 Inch (J084)', code: 'J084' },
          { spec: '10 Inch (J086)', code: 'J086' },
          { spec: '12 Inch (J082)', code: 'J082' },
          { spec: '12 Inch (J085)', code: 'J085' },
          { spec: '12 Inch (J087)', code: 'J087' }
        ]
      },
      {
        id: 'ht-plier',
        name: 'ACI High Leverage Pliers',
        image: BASE + 'assets/images/pillars-m.jpg',
        subcategory: 'Plier',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
        variants: [
          { spec: 'Combination Plier 8"', code: 'J088' },
          { spec: 'Long Nose Plier 8"', code: 'J089' },
          { spec: 'Diagonal Plier 8"', code: 'J090' },
          { spec: 'Heavy Plier 8"', code: 'J091' }
        ]
      },
      {
        id: 'ht-hammer',
        name: 'ACI Professional Hammer',
        image: BASE + 'assets/images/hammer-m.jpg',
        subcategory: 'Hammer',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
        variants: [
          { spec: 'Claw Hammer 500g', code: 'J096' },
          { spec: 'Claw Hammer 1000g', code: 'J097' },
          { spec: 'Machinist Hammer 1500g', code: 'J098' },
          { spec: 'Ball Peen 500g', code: 'J099' },
          { spec: 'Ball Peen 1000g', code: 'J100' }
        ]
      },
      {
        id: 'ht-tape',
        name: 'ACI Steel Measuring Tape',
        image: BASE + 'assets/images/measure-m.jpg',
        subcategory: 'Measuring Tape',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
        variants: [
          { spec: '3 Meter (J101)', code: 'J101' },
          { spec: '5 Meter (J102)', code: 'J102' },
          { spec: '7.5 Meter (J103)', code: 'J103' },
          { spec: '10 Meter (J104)', code: 'J104' },
          { spec: 'Pro 3M (J105)', code: 'J105' },
          { spec: 'Pro 5M (J106)', code: 'J106' },
          { spec: 'Pro 7.5M (J107)', code: 'J107' },
          { spec: 'Pro 10M (J108)', code: 'J108' }
        ]
      },
      {
        id: 'ht-hacksaw',
        name: 'ACI Professional Hacksaw & Blade',
        image: BASE + 'assets/images/product/hand-tools/hacksaw-1.png',
        subcategory: 'Hacksaw',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
        variants: [
          { spec: 'Hacksaw Frame 12"', code: 'J109' },
          { spec: 'Hacksaw Blade Replacement', code: 'J110' }
        ]
      },
      {
        id: 'ht-ring-spanner-set-1',
        name: 'ACI Ring Spanner Set (8–17mm)',
        code: 'J111',
        image: BASE + 'assets/images/product/hand-tools/1.png',
        subcategory: 'Spanners',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools'
      },
      {
        id: 'ht-ring-spanner-set-2',
        name: 'ACI Ring Spanner Industrial Set',
        code: 'J112',
        image: BASE + 'assets/images/product/hand-tools/1(1).png',
        subcategory: 'Spanners',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools'
      },
      {
        id: 'ht-ring-spanner-13-18',
        name: 'ACI Ring Spanner (13–18mm)',
        code: 'J113',
        image: BASE + 'assets/images/product/hand-tools/13-18-inch.png',
        subcategory: 'Spanners',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools'
      },
      {
        id: 'ht-ring-spanner-8-17',
        name: 'ACI Offset Ring Spanner (8–17mm)',
        code: 'J114',
        image: BASE + 'assets/images/product/hand-tools/ring-spanner-8-17-inch.png',
        subcategory: 'Spanners',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools'
      },
      {
        id: 'ht-comb-spanner',
        name: 'ACI Combination Spanner Set (10–17mm)',
        code: 'J115',
        image: BASE + 'assets/images/product/hand-tools/10-17-inch.png',
        subcategory: 'Spanners',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools'
      },
      {
        id: 'ht-open-spanners',
        name: 'ACI Open End Spanner Range',
        image: BASE + 'assets/images/product/hand-tools/a27bf2bbc65691aebde6f6ab037f768.png',
        subcategory: 'Spanners',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
        variants: [
          { spec: '6x7 mm', code: 'J116' },
          { spec: '8x9 mm', code: 'J117' },
          { spec: '10x11 mm', code: 'J118' },
          { spec: '12x13 mm', code: 'J119' },
          { spec: '14x15 mm', code: 'J120' },
          { spec: '16x17 mm', code: 'J121' },
          { spec: '18x19 mm', code: 'J122' },
          { spec: '20x22 mm', code: 'J123' },
          { spec: '21x23 mm', code: 'J124' },
          { spec: '24x26 mm', code: 'J125' },
          { spec: '25x28 mm', code: 'J126' },
          { spec: '27x30 mm', code: 'J127' },
          { spec: '30x32 mm', code: 'J128' }
        ]
      },
      {
        id: 'ht-hand-toolkit',
        name: 'ACI Multi-Purpose Hand Toolkit',
        image: BASE + 'assets/images/product/hand-tools/1(2).png',
        subcategory: 'Hand Tools',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/hand-tools',
        variants: [
          { spec: 'Set Type 1', code: 'J145' },
          { spec: 'Set Type 2', code: 'J146' },
          { spec: 'Set Type 3', code: 'J147' },
          { spec: 'Set Type 4', code: 'J148' },
          { spec: 'Set Type 5', code: 'J149' },
          { spec: 'Set Type 6', code: 'J150' }
        ]
      }
    ]
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
    ]
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
      {
        id: 'ac-direct-drive',
        name: 'ACI Air Compressor – Direct Drive Series',
        image: BASE + 'assets/images/compressor-models.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1',
        variants: [
          { spec: '24 Liter (2.0 HP, 1.5 KW, 8 Bar)', code: 'AC-24L' },
          { spec: '40 Liter (2.5 HP, 1.8 KW, 8 Bar)', code: 'AC-40L' },
          { spec: '60 Liter (3.0 HP, 2.2 KW, 8 Bar)', code: 'AC-60L' },
          { spec: '100 Liter (3.0 HP, 2.2 KW, 8 Bar)', code: 'AC-100L' }
        ]
      },
      {
        id: 'ac-belt-drive-medium',
        name: 'ACI Air Compressor – Belt Drive Industrial',
        image: BASE + 'assets/images/compressor-models.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1',
        variants: [
          { spec: '150 Liter (4.0 HP, 3.0 KW, 10 Bar)', code: 'AC-150L' },
          { spec: '200 Liter (5.5 HP, 4.0 KW, 10 Bar)', code: 'AC-200L' },
          { spec: '250 Liter (5.5 HP, 4.0 KW, 10 Bar)', code: 'AC-250L' },
          { spec: '300 Liter (7.5 HP, 5.5 KW, 10 Bar)', code: 'AC-300L' },
          { spec: '350 Liter (7.5 HP, 5.5 KW, 10 Bar)', code: 'AC-350L' }
        ]
      },
      {
        id: 'ac-heavy-duty',
        name: 'ACI Air Compressor – Heavy Industrial Series',
        image: BASE + 'assets/images/compressor-models.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/aci-air-compressor1',
        variants: [
          { spec: '400 Liter (10.0 HP, 7.5 KW, 12 Bar)', code: 'AC-400L' },
          { spec: '500 Liter (10.0 HP, 7.5 KW, 12 Bar)', code: 'AC-500L' },
          { spec: '600 Liter (15.0 HP, 11 KW, 12 Bar)', code: 'AC-600L' },
          { spec: '1000 Liter (20.0 HP, 15 KW, 12 Bar)', code: 'AC-1000L' }
        ]
      }
    ]
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
      {
        id: 'vm-motor',
        name: 'ACI Smart Concrete Vibrator Motor',
        image: BASE + 'assets/images/product/others/viibrator/vibrator-motor.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/vibrator-motor-and-nozzle',
        variants: [
          { spec: '2.0 HP Heavy Motor', code: 'J063' },
          { spec: '3.0 HP High Output Motor', code: 'J064' }
        ]
      },
      {
        id: 'vm-nozzle',
        name: 'ACI Smart Concrete Vibrator Nozzle',
        image: BASE + 'assets/images/product/others/viibrator/nozzel.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/vibrator-motor-and-nozzle',
        variants: [
          { spec: '38 mm × 6 Meter', code: 'J065' },
          { spec: '45 mm × 6 Meter', code: 'J066' }
        ]
      }
    ]
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
    ]
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
    ]
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
      {
        id: 'cd-3',
        name: 'ACI Smart Diamond Cutting Disc',
        image: BASE + 'assets/images/product/others/viibrator/disc/disc-3.jpg',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/cutting-disc',
        variants: [
          { spec: '4 Inch Diamond Blade', code: 'J138' },
          { spec: '7 Inch Diamond Blade', code: 'J139' }
        ]
      },
      { id: 'cd-5', name: 'ACI Smart Flap Disc (Metal Grinding)', code: 'J142', image: BASE + 'assets/images/product/others/viibrator/disc/disc-4.jpg', originalUrl: BASE + 'products/other-machinery/aci-smart-tools/cutting-disc' },
    ]
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
      {
        id: 'bearing-2rs',
        name: 'ACI Bearing – 2RS Deep Groove Series',
        image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg',
        subcategory: '2RS Series',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing',
        variants: [
          { spec: '6201-2RS', code: 'J000' },
          { spec: '6201-2RS-RED', code: 'J232' },
          { spec: '6202-2RS', code: 'J001' },
          { spec: '6202-2RS-RED', code: 'J233' },
          { spec: '6203-2RS', code: 'J002' },
          { spec: '6203-2RS-RED', code: 'J234' },
          { spec: '6204-2RS', code: 'J003' },
          { spec: '6204-2RS-RED', code: 'J235' },
          { spec: '6205-2RS', code: 'J004' },
          { spec: '6205-2RS-RED', code: 'J236' },
          { spec: '6206-2RS', code: 'J005' },
          { spec: '6207-2RS', code: 'J006' },
          { spec: '6208-2RS', code: 'J007' },
          { spec: '6209-2RS', code: 'J008' },
          { spec: '6210-2RS', code: 'J009' },
          { spec: '6301-2RS', code: 'J011' },
          { spec: '6302-2RS', code: 'J012' },
          { spec: '6303-2RS', code: 'J013' },
          { spec: '6304-2RS', code: 'J014' },
          { spec: '6305-2RS', code: 'J015' },
          { spec: '6306-2RS', code: 'J016' },
          { spec: '6307-2RS', code: 'J017' },
          { spec: '6308-2RS', code: 'J018' },
          { spec: '6000-2RS', code: 'J019' },
          { spec: '6001-2RS', code: 'J020' },
          { spec: '6002-2RS', code: 'J021' },
          { spec: '6003-2RS', code: 'J022' },
          { spec: '6004-2RS', code: 'J023' },
          { spec: '6005-2RS', code: 'J024' },
          { spec: '6212-2RS', code: 'J182' },
          { spec: '6214-2RS', code: 'J183' },
          { spec: '6309-2RS', code: 'J184' },
          { spec: '6310-2RS', code: 'J185' },
          { spec: '6311-2RS', code: 'J186' },
          { spec: '6312-2RS', code: 'J187' },
          { spec: '6313-2RS', code: 'J188' },
          { spec: '607-2RS', code: 'J207' },
          { spec: '608-2RS', code: 'J208' },
          { spec: '609-2RS', code: 'J209' },
          { spec: '627-2RS', code: 'J210' },
          { spec: '629-2RS', code: 'J211' }
        ]
      },
      {
        id: 'bearing-ball',
        name: 'ACI Bearing – Industrial Ball Bearing Series',
        image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg',
        subcategory: 'Ball Bearing',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing',
        variants: [
          { spec: '6204-Ball', code: 'J172' },
          { spec: '6205-Ball', code: 'J173' },
          { spec: '6206-Ball', code: 'J174' },
          { spec: '6207-Ball', code: 'J175' },
          { spec: '6208-Ball', code: 'J176' },
          { spec: '6209-Ball', code: 'J230' },
          { spec: '6304-Ball', code: 'J177' },
          { spec: '6305-Ball', code: 'J178' },
          { spec: '6306-Ball', code: 'J179' },
          { spec: '6307-Ball', code: 'J180' },
          { spec: '6308-Ball', code: 'J181' },
          { spec: '6309-Ball', code: 'J231' }
        ]
      },
      {
        id: 'bearing-roller',
        name: 'ACI Bearing – Taper Roller Bearing Series',
        image: BASE + 'assets/images/product/others/viibrator/disc/bearing-covere.jpg',
        subcategory: 'Roller Bearing',
        originalUrl: BASE + 'products/other-machinery/aci-smart-tools/bearing',
        variants: [
          { spec: '30204-Roller', code: 'J212' },
          { spec: '30205-Roller', code: 'J213' },
          { spec: '30207-Roller', code: 'J214' },
          { spec: '30208-Roller', code: 'J215' },
          { spec: '30209-Roller', code: 'J216' },
          { spec: '30210-Roller', code: 'J223' },
          { spec: '32004-Roller', code: 'J217' },
          { spec: '32005-Roller', code: 'J218' },
          { spec: '32007-Roller', code: 'J219' },
          { spec: '32206-Roller', code: 'J220' },
          { spec: '32207-Roller', code: 'J221' },
          { spec: '32208-Roller', code: 'J222' },
          { spec: '32213-Roller', code: 'J224' },
          { spec: '32216-Roller', code: 'J225' },
          { spec: '48548/10-Roller', code: 'J226' }
        ]
      }
    ]
  }
];

export default categories;
