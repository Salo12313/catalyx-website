// ===================== CATALYX PRODUCT DATA =====================
// Single source of truth for all products.
// Used by: catalog.html, product.html, coa.html
//
// Structure: each product has an `id` and a `variants` array.
// Products with multiple doses (like GLP-3) have multiple variants.
// Products with one dose have a single-item variants array.

const products = [
  {
    id: "glp3-rt",
    name: "GLP-3 (RT)",
    cat: "Metabolic",
    category: "Triple-Agonist Peptide",
    color: "#0a3d6b",
    tags: ["GIP / GLP-1 / Glucagon", "39 Amino Acids", "Lyophilized"],
    description: "A 39-amino acid triple-agonist peptide with binding affinity at GIP, GLP-1, and glucagon receptors. Referenced across metabolic and energy-balance research literature. Supplied as a premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-GLP3-10",
        dose: "10mg",
        coa: "coa/ctx-glp3-10.pdf",
        coaDetail: {
          purity: "99.62%",
          labeled: "10mg",
          actual: "10.14mg",
          lot: "LOT-2026-0418-A",
          tested: "Apr 18, 2026"
        }
      },
      {
        sku: "CTX-GLP3-20",
        dose: "20mg",
        coa: "coa/ctx-glp3-20.pdf",
        coaDetail: {
          purity: "99.71%",
          labeled: "20mg",
          actual: "20.27mg",
          lot: "LOT-2026-0418-B",
          tested: "Apr 18, 2026"
        }
      },
      {
        sku: "CTX-GLP3-30",
        dose: "30mg",
        coa: "coa/ctx-glp3-30.pdf",
        coaDetail: {
          purity: "99.58%",
          labeled: "30mg",
          actual: "30.42mg",
          lot: "LOT-2026-0418-C",
          tested: "Apr 18, 2026"
        }
      }
    ]
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    cat: "Cosmetic",
    category: "Copper Tripeptide",
    color: "#e8741c",
    image: "images/ghk-cu.jpg",
    tags: ["Copper Chelating", "3 Amino Acids", "Lyophilized"],
    description: "A copper-chelating tripeptide naturally found in human plasma. Studied in dermatological and tissue research literature for its role in copper transport and matrix remodeling pathways. Premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-GHKCU-100",
        dose: "100mg",
        coa: "coa/ctx-ghkcu-100.pdf",
        coaDetail: {
          purity: "99.84%",
          labeled: "100mg",
          actual: "101.12mg",
          lot: "LOT-2026-0327-A",
          tested: "Mar 27, 2026"
        }
      }
    ]
  },
  {
    id: "bpc-157",
    name: "BPC 157",
    cat: "Healing",
    category: "Pentadecapeptide",
    color: "#1ba9c0",
    tags: ["15 Amino Acids", "Gastric Fragment", "Lyophilized"],
    description: "A 15-amino acid synthetic pentadecapeptide derived from a fragment of human gastric juice. Cited extensively in regenerative biology and gastrointestinal research literature. Premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-BPC157-10",
        dose: "10mg",
        coa: "coa/ctx-bpc157-10.pdf",
        coaDetail: {
          purity: "99.91%",
          labeled: "10mg",
          actual: "10.08mg",
          lot: "LOT-2026-0402-B",
          tested: "Apr 02, 2026"
        }
      }
    ]
  },
  {
    id: "tb-500",
    name: "TB 500",
    cat: "Healing",
    category: "Thymosin β4 Fragment",
    color: "#2d5e3a",
    tags: ["17 Amino Acids", "Actin-Sequestering", "Lyophilized"],
    description: "A synthetic 17-amino acid fragment of thymosin β4, an actin-sequestering peptide. Studied in cellular research for its role in cytoskeletal dynamics and tissue research models. Premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-TB500-10",
        dose: "10mg",
        coa: "coa/ctx-tb500-10.pdf",
        coaDetail: {
          purity: "99.72%",
          labeled: "10mg",
          actual: "10.21mg",
          lot: "LOT-2026-0320-A",
          tested: "Mar 20, 2026"
        }
      }
    ]
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    cat: "Growth",
    category: "GHRH Analog",
    color: "#6e3eaa",
    tags: ["44 Amino Acids", "GHRH Analog", "Lyophilized"],
    description: "A synthetic 44-amino acid analog of growth hormone-releasing hormone (GHRH). Referenced in endocrinology and metabolic research literature. Premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-TES-10",
        dose: "10mg",
        coa: "coa/ctx-tes-10.pdf",
        coaDetail: {
          purity: "99.45%",
          labeled: "10mg",
          actual: "10.18mg",
          lot: "LOT-2026-0315-C",
          tested: "Mar 15, 2026"
        }
      }
    ]
  },
  {
    id: "cjc-ipa",
    name: "CJC 1295 (No DAC) / Ipamorelin",
    cat: "Growth",
    category: "Secretagogue Peptide Blend",
    color: "#1a2a5e",
    tags: ["Mod GRF 1-29 + Ipamorelin", "Modified GHRH + Ipamorelin", "CJC / Ipa Blend"],
    description: "A strategic peptide combination of two secretagogue peptides — a modified GRF 1-29 GHRH analog and a selective ghrelin receptor agonist. Studied in endocrine research models for synchronized receptor activation. Premium research-grade reference blend.",
    variants: [
      {
        sku: "CTX-CJC-10",
        dose: "10mg",
        coa: "coa/ctx-cjc-10.pdf",
        coaDetail: {
          purity: "99.94%",
          labeled: "10mg blend",
          actual: "12.02mg total",
          breakdown: [
            { name: "Ipamorelin", amount: "6.13mg" },
            { name: "CJC-1295", amount: "5.89mg" }
          ],
          lot: "LOT-2026-0310-A",
          tested: "Mar 10, 2026"
        }
      }
    ]
  },
  {
    id: "mots-c",
    name: "MOTS-C",
    cat: "Metabolic",
    category: "Mitochondrial-Derived Peptide",
    color: "#3fc89c",
    tags: ["16 Amino Acids", "Mitochondrial Origin", "Lyophilized"],
    description: "A 16-amino acid mitochondrial-derived peptide encoded within the 12S rRNA region of mtDNA. Studied in mitochondrial biology and metabolic regulation research. Premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-MOTSC-10",
        dose: "10mg",
        coa: "coa/ctx-motsc-10.pdf",
        coaDetail: {
          purity: "99.66%",
          labeled: "10mg",
          actual: "10.13mg",
          lot: "LOT-2026-0301-A",
          tested: "Mar 01, 2026"
        }
      }
    ]
  },
  {
    id: "melanotan-ii",
    name: "Melanotan II",
    cat: "Cosmetic",
    category: "α-MSH Analog",
    color: "#d63838",
    tags: ["Cyclic Heptapeptide", "Melanocortin", "Lyophilized"],
    description: "A synthetic cyclic analog of α-melanocyte stimulating hormone (α-MSH). Referenced in melanocortin receptor research literature. Premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-MT2-10",
        dose: "10mg",
        coa: "coa/ctx-mt2-10.pdf",
        coaDetail: {
          purity: "99.78%",
          labeled: "10mg",
          actual: "10.09mg",
          lot: "LOT-2026-0228-B",
          tested: "Feb 28, 2026"
        }
      }
    ]
  },
  {
    id: "glow",
    name: "GLOW",
    cat: "Blend",
    category: "Skin Research Blend",
    color: "#d99316",
    tags: ["GHK-Cu + BPC-157", "Skin Research", "Lyophilized"],
    description: "A combinatorial peptide reagent blend formulated for skin and tissue research applications. Combines GHK-Cu and BPC 157 in a research-ready ratio. Premium research-grade reference blend.",
    variants: [
      {
        sku: "CTX-GLOW-70",
        dose: "70mg",
        coa: "coa/ctx-glow-70.pdf",
        coaDetail: {
          purity: "99.52%",
          labeled: "70mg blend",
          actual: "71.18mg total",
          breakdown: [
            { name: "GHK-Cu", amount: "50.24mg" },
            { name: "BPC 157", amount: "20.94mg" }
          ],
          lot: "LOT-2026-0220-A",
          tested: "Feb 20, 2026"
        }
      }
    ]
  },
  {
    id: "klow",
    name: "KLOW",
    cat: "Blend",
    category: "Extended Skin & Tissue Blend",
    color: "#8a1d4a",
    tags: ["KPV + GHK-Cu + BPC + TB-500", "Tissue Research", "Lyophilized"],
    description: "An extended skin and tissue research blend combining KPV, GHK-Cu, BPC 157, and TB 500. Used in dermatological and regenerative research models. Premium research-grade reference blend.",
    variants: [
      {
        sku: "CTX-KLOW-80",
        dose: "80mg",
        coa: "coa/ctx-klow-80.pdf",
        coaDetail: {
          purity: "99.41%",
          labeled: "80mg blend",
          actual: "81.62mg total",
          breakdown: [
            { name: "KPV", amount: "20.11mg" },
            { name: "GHK-Cu", amount: "30.42mg" },
            { name: "BPC 157", amount: "15.65mg" },
            { name: "TB 500", amount: "15.44mg" }
          ],
          lot: "LOT-2026-0215-A",
          tested: "Feb 15, 2026"
        }
      }
    ]
  },
  {
    id: "kpv",
    name: "KPV",
    cat: "Healing",
    category: "α-MSH C-terminal Fragment",
    color: "#8fd13b",
    tags: ["Lys-Pro-Val", "3 Amino Acids", "Lyophilized"],
    description: "A C-terminal tripeptide fragment (Lys-Pro-Val) of α-MSH. Studied in inflammation and barrier function research literature. Premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-KPV-10",
        dose: "10mg",
        coa: "coa/ctx-kpv-10.pdf",
        coaDetail: {
          purity: "99.88%",
          labeled: "10mg",
          actual: "10.06mg",
          lot: "LOT-2026-0210-A",
          tested: "Feb 10, 2026"
        }
      }
    ]
  },
  {
    id: "glutathione",
    name: "Glutathione",
    cat: "Cosmetic",
    category: "Endogenous Tripeptide",
    color: "#b73592",
    tags: ["Glu-Cys-Gly", "Reduced Form", "Lyophilized"],
    description: "A tripeptide composed of glutamine, cysteine, and glycine. Widely studied as a major endogenous antioxidant in cellular research literature. Premium research-grade reference material.",
    variants: [
      {
        sku: "CTX-GSH-600",
        dose: "600mg",
        coa: "coa/ctx-gsh-600.pdf",
        coaDetail: {
          purity: "99.96%",
          labeled: "600mg",
          actual: "601.84mg",
          lot: "LOT-2026-0205-A",
          tested: "Feb 05, 2026"
        }
      }
    ]
  },
  {
    id: "bac-water",
    name: "Bacteriostatic Water",
    cat: "Reagent",
    category: "Sterile Reconstitution Diluent",
    color: "#4ab1e0",
    tags: ["0.9% Benzyl Alcohol", "Sterile Filtered", "Sealed Vial"],
    description: "Sterile water for injection containing 0.9% benzyl alcohol as a bacteriostatic preservative. Used as a reconstitution diluent in laboratory research applications.",
    variants: [
      {
        sku: "CTX-BAC-10",
        dose: "10ml",
        coa: "coa/ctx-bac-10.pdf",
        coaDetail: {
          purity: "USP Grade",
          labeled: "10ml",
          actual: "10.0ml ± 2%",
          lot: "LOT-2026-0130-A",
          tested: "Jan 30, 2026"
        }
      }
    ]
  },
  {
    id: "acetic-acid",
    name: "Acetic Acid",
    cat: "Reagent",
    category: "Buffer Solution",
    color: "#6a7a84",
    tags: ["0.6% Solution", "Reconstitution Buffer", "Sealed Vial"],
    description: "Dilute glacial acetic acid solution used as a reconstitution buffer in peptide research applications. Pharmaceutical-grade reagent.",
    variants: [
      {
        sku: "CTX-AA-3",
        dose: "0.6% · 3ml",
        coa: "coa/ctx-aa-3.pdf",
        coaDetail: {
          purity: "Pharm Grade 0.6%",
          labeled: "3ml",
          actual: "3.0ml ± 2%",
          lot: "LOT-2026-0125-A",
          tested: "Jan 25, 2026"
        }
      }
    ]
  }
];

// ===== HELPER FUNCTIONS =====

// Find product by its id (used by product page)
function findProductById(id) {
  return products.find(p => p.id === id);
}

// Find product + variant by sku (used by direct sku links)
function findByVariantSku(sku) {
  for (const p of products) {
    const v = p.variants.find(v => v.sku === sku);
    if (v) return { product: p, variant: v };
  }
  return null;
}

// Flatten all variants across all products (used by COA library)
function getAllVariants() {
  const all = [];
  products.forEach(p => {
    p.variants.forEach(v => {
      all.push({
        product: p,
        variant: v
      });
    });
  });
  return all;
}

// Get a display label for dose range when product has multiple variants
function getDoseDisplay(product) {
  if (product.variants.length === 1) {
    return product.variants[0].dose;
  }
  return product.variants.map(v => v.dose).join(' / ');
}
