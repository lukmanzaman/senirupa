// Configuration for VIS Museum of Fine Arts & Painting Sciences
const STORAGE_KEY = 'vis_finearts_positions';

const TECH_CATEGORIES = [
    {
        "id": "all",
        "label": "Semua Koleksi",
        "icon": "✨"
    },
    {
        "id": "P1",
        "label": "Doktrin & Sejarah",
        "icon": "🏛️",
        "title": "Academic Doctrine & History Painting"
    },
    {
        "id": "P2",
        "label": "Seni Potret",
        "icon": "👤",
        "title": "Portraiture & Figurative Studies"
    },
    {
        "id": "P3",
        "label": "Genre & Lanskap",
        "icon": "🌄",
        "title": "Everyday Genre Scenes & Landscapes"
    },
    {
        "id": "P4",
        "label": "Still Life & Vanitas",
        "icon": "🕯️",
        "title": "Still Life, Bodegón & Vanitas"
    },
    {
        "id": "P5",
        "label": "Kanon Klasik & Anatomi",
        "icon": "📐",
        "title": "Classical Ideal & Figurative Canon"
    },
    {
        "id": "P6",
        "label": "Pigmen Alami Bersejarah",
        "icon": "💎",
        "title": "Historic Natural & Mineral Pigments"
    },
    {
        "id": "P7",
        "label": "Revolusi Kimia Pigmen",
        "icon": "🧪",
        "title": "Synthetic Pigments & Chemical Revolution"
    },
    {
        "id": "P8",
        "label": "Media Lukis & Preparasi",
        "icon": "📜",
        "title": "Mediums, Binders & Ground Preparations"
    },
    {
        "id": "P9",
        "label": "Teknik Master Klasik",
        "icon": "🖌️",
        "title": "Master Painting Techniques & Optical Layers"
    },
    {
        "id": "P10",
        "label": "Sains Konservasi Seni",
        "icon": "🔬",
        "title": "Conservation Science & Art Forensics"
    }
];

const SYNONYMS = {
    "lukisan": [
        "painting",
        "canvas",
        "panel",
        "portrait",
        "landscape",
        "still life",
        "mural",
        "fresco"
    ],
    "pigmen": [
        "pigment",
        "color",
        "mineral",
        "lapis lazuli",
        "ultramarine",
        "vermilion",
        "ochre",
        "cadmium",
        "cobalt"
    ],
    "warna": [
        "color",
        "colour",
        "hue",
        "tint",
        "shade",
        "chroma",
        "saturation",
        "glazing",
        "verdaccio"
    ],
    "minyak": [
        "oil",
        "drying oil",
        "linseed",
        "walnut",
        "poppyseed",
        "linoxin",
        "glaze"
    ],
    "tempera": [
        "tempera",
        "egg tempera",
        "yolk",
        "emulsion",
        "casein"
    ],
    "kanvas": [
        "canvas",
        "linen",
        "panel",
        "support",
        "stretcher",
        "ground",
        "gesso"
    ],
    "kuas": [
        "brush",
        "impasto",
        "scumbling",
        "sfumato",
        "chiaroscuro",
        "brushstroke"
    ],
    "potret": [
        "portrait",
        "self-portrait",
        "tronie",
        "face",
        "sitter",
        "likeness",
        "physiognomy"
    ],
    "lanskap": [
        "landscape",
        "veduta",
        "seascape",
        "marine",
        "plein air",
        "pastoral",
        "arcadia"
    ],
    "sejarah": [
        "history",
        "academic",
        "doctrine",
        "mythology",
        "biblical",
        "allegory",
        "grand manner"
    ],
    "benda mati": [
        "still life",
        "vanitas",
        "bodegon",
        "memento mori",
        "pronkstilleven"
    ],
    "restorasi": [
        "restoration",
        "conservation",
        "cleaning",
        "varnish",
        "inpainting",
        "tratteggio",
        "relining"
    ],
    "sains": [
        "spectroscopy",
        "xrf",
        "raman",
        "ftir",
        "radiography",
        "sem",
        "edx",
        "stratigraphy",
        "irr"
    ],
    "gelap terang": [
        "chiaroscuro",
        "tenebrism",
        "sfumato",
        "cangiante",
        "lighting"
    ],
    "anatomi": [
        "anatomy",
        "nude",
        "figure",
        "torso",
        "contrapposto",
        "proportion",
        "polykleitos",
        "doryphoros",
        "belvedere",
        "david",
        "durer"
    ],
    "patung": [
        "sculpture",
        "statue",
        "bronze",
        "marble",
        "cast",
        "torso",
        "relief"
    ]
};
