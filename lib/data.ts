export const collections = [
  {
    slug: 'high-jewelry',
    name: 'High Jewelry',
    tagline: 'Singular Works of Art',
    description:
      'Each piece in our High Jewelry collection represents the pinnacle of the jeweler\\u2019s craft — rare gemstones selected for their exceptional color, clarity, and character, set by artisans whose expertise spans generations.',
    heroImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=85',
    count: 24,
  },
  {
    slug: 'fine-jewelry',
    name: 'Fine Jewelry',
    tagline: 'Crafted for Every Chapter',
    description:
      'Refined designs that transcend seasons and trends. Our fine jewelry collection offers timeless pieces suitable for daily wear, each crafted from the finest metals and responsibly sourced gemstones.',
    heroImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85',
    count: 48,
  },
  {
    slug: 'estate-jewelry',
    name: 'Estate Jewelry',
    tagline: 'History You Can Wear',
    description:
      'Our estate collection presents jewelry of remarkable provenance — pieces that have traveled through time, each carrying a unique history. Carefully authenticated and thoughtfully curated.',
    heroImage: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1600&q=85',
    count: 36,
  },
  {
    slug: 'bridal',
    name: 'Bridal',
    tagline: 'Forever, Beginning Here',
    description:
      'From the proposal to the ceremony and beyond, our bridal collection offers engagement rings, wedding bands, and occasion jewelry of exceptional quality — designed to mark the most significant moments of a lifetime.',
    heroImage: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=85',
    count: 32,
  },
];

export const products = [
  {
    slug: 'sapphire-diamond-ring',
    name: 'Kashmir Sapphire Ring',
    collection: 'high-jewelry',
    category: 'Rings',
    gemstone: 'Kashmir Sapphire',
    metal: 'Platinum',
    era: 'Contemporary',
    designer: 'Atelier Commission',
    description:
      'A captivating 4.82ct Kashmir sapphire of exceptional cornflower blue, surrounded by a halo of old-cut diamonds totaling 1.6ct. Set in hand-fabricated platinum, this piece exemplifies the rarest encounter between nature\'s artistry and human craft.',
    story:
      'This sapphire was sourced directly from a private collection, accompanied by a GIA certificate confirming its Kashmir origin — the most coveted provenance in colored gemstone connoisseurship.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85',
    ],
    certification: 'GIA Certified',
    featured: true,
  },
  {
    slug: 'emerald-earrings',
    name: 'Colombian Emerald Drops',
    collection: 'high-jewelry',
    category: 'Earrings',
    gemstone: 'Colombian Emerald',
    metal: '18k Yellow Gold',
    era: 'Contemporary',
    designer: 'Private Commission',
    description:
      'Matched pair of Colombian emeralds totaling 6.2ct, suspended from pavé-set diamond surmounts in 18-karat gold. The emeralds display the characteristic "jardin" inclusions that authenticate their Colombian origin.',
    story:
      'Sourced from the Muzo mines of Colombia, these emeralds represent the pinnacle of colored gemstone collecting.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=85',
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=900&q=85',
    ],
    certification: 'AGL Certified',
    featured: true,
  },
  {
    slug: 'art-deco-bracelet',
    name: 'Art Deco Diamond Bracelet',
    collection: 'estate-jewelry',
    category: 'Bracelets',
    gemstone: 'Old European Cut Diamonds',
    metal: 'Platinum',
    era: '1920s',
    designer: 'Attributed to Cartier',
    description:
      'A remarkable example of 1920s Art Deco craftsmanship — a geometric platinum bracelet set with approximately 18ct of old European cut diamonds in a milgrain-edged framework of extraordinary precision.',
    story:
      'Acquired from a prominent East Coast estate, this bracelet retains its original box and a handwritten provenance letter dating to 1927.',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=900&q=85',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85',
    ],
    certification: 'GIA Certified',
    featured: true,
  },
  {
    slug: 'solitaire-engagement',
    name: 'Old Mine Cut Solitaire',
    collection: 'bridal',
    category: 'Engagement Rings',
    gemstone: 'Old Mine Cut Diamond',
    metal: 'Platinum',
    era: 'Edwardian',
    designer: 'Edwardian',
    description:
      'A stunning 3.1ct old mine cut diamond of I color, VS1 clarity — the warm, romantic tone characteristic of antique diamonds that cannot be replicated in modern cutting. Set in a delicate platinum six-prong solitaire.',
    story:
      'Sourced from a private family collection, this stone has been repolished and reset while preserving the integrity of the original cut.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=85',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&q=85',
    ],
    certification: 'GIA Certified',
    featured: true,
  },
  {
    slug: 'diamond-tennis-necklace',
    name: 'Diamond Rivière Necklace',
    collection: 'fine-jewelry',
    category: 'Necklaces',
    gemstone: 'Round Brilliant Diamonds',
    metal: 'Platinum',
    era: 'Contemporary',
    designer: 'House Collection',
    description:
      'Forty-two round brilliant diamonds totaling 12.8ct, graduated from 0.42ct at center to 0.18ct at clasp, all D-E color, VVS1-VS1 clarity. The ultimate expression of understated luxury.',
    story: '',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=85',
    ],
    certification: 'IGI Certified',
    featured: false,
  },
  {
    slug: 'ruby-ring',
    name: 'Burma Ruby Ring',
    collection: 'high-jewelry',
    category: 'Rings',
    gemstone: 'Burma Ruby',
    metal: '18k Yellow Gold',
    era: 'Contemporary',
    designer: 'Atelier Commission',
    description:
      "A 2.6ct unheated Burma ruby of exceptional pigeon\'s blood color, set in a hand-engraved 18-karat gold mounting with diamond side stones. GRS certified as 'pigeon\'s blood' — the highest designation in ruby collecting.",
    story: '',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85',
    ],
    certification: 'GRS Certified',
    featured: false,
  },
];

export const brands = [
  'Cartier', 'Van Cleef & Arpels', 'Bulgari', 'Tiffany & Co.', 'Harry Winston',
  'Graff', 'David Webb', 'Verdura', 'Seaman Schepps', 'JAR',
];

export const filterOptions = {
  categories: ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Brooches', 'Watches'],
  gemstones: ['Diamond', 'Sapphire', 'Ruby', 'Emerald', 'Pearl', 'Spinel', 'Paraíba Tourmaline'],
  metals: ['Platinum', '18k Yellow Gold', '18k White Gold', '18k Rose Gold'],
  eras: ['Contemporary', '1920s–Art Deco', 'Edwardian', 'Victorian', 'Retro', 'Mid-Century'],
};
