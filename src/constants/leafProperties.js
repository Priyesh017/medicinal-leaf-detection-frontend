export const LEAF_PROPERTIES = {
  Alovera: [
    "Promotes rapid wound healing",
    "Boosts skin hydration and elasticity",
    "Reduces inflammation and redness",
    "Enhances immune response with antioxidants",
  ],
  Bamboo: [
    "Accelerates tissue repair and regeneration",
    "Boosts collagen production for skin elasticity",
    "Rich in silica for stronger hair and nails",
    "Natural detoxifier with powerful antioxidants",
  ],
  Chilly: [
    "Enhances metabolism and fat burning",
    "Relieves pain with natural capsaicin",
    "Rich in Vitamin C, boosting immunity",
    "Improves heart health by reducing cholesterol",
  ],
  Eucalyptus: [
    "Powerful decongestant for respiratory health",
    "Natural antiseptic for wound healing",
    "Reduces muscle and joint pain",
    "Boosts mental clarity and reduces stress",
  ],
  Guava: [
    "Rich in Vitamin C for enhanced immunity",
    "Improves digestive health with fiber",
    "Lowers blood sugar levels naturally",
    "Protects heart health by reducing bad cholesterol",
  ],
  Hibiscus: [
    "Lowers blood pressure naturally",
    "Boosts liver health with detoxifying properties",
    "Enhances skin radiance and anti-aging effects",
    "Reduces menstrual pain and regulates hormones",
  ],
  Jackfruit: [
    "Boosts immune system with high Vitamin C",
    "Promotes gut health with prebiotic fiber",
    "Strengthens bones with rich magnesium content",
    "Improves skin health with powerful antioxidants",
  ],
};

// constants/leafScientificNames.js
export const LEAF_SCIENTIFIC_NAMES = {
  Alovera: "Aloe vera",
  Bamboo: "Bambusoideae",
  Chilly: "Capsicum annuum",
  Eucalyptus: "Eucalyptus globulus",
  Guava: "Psidium guajava",
  Hibiscus: "Hibiscus rosa-sinensis",
  Jackfruit: "Artocarpus heterophyllus",
};

// Utility function to get properties for a given leaf
export const getLeafProperties = (leafName) => {
  return LEAF_PROPERTIES[leafName] || [];
};
