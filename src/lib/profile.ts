// ---------------------------------------------------------------------------
// Everything about you that is not a list item lives here.
// Edit the text in quotes and push — the site rebuilds itself.
// ---------------------------------------------------------------------------

const profile = {
  name: "Alen Zimic-Sheen",
  fullName: "Alen Zimic-Sheen",
  alternateNames: ["Alen Zimic", "Alen Zimic Sheen"],
  siteUrl: "https://alenzimic.github.io",

  // Shown under your name at the top of the page.
  role: "PhD student in Computational Biology",
  institution: "Cornell University",

  // The greeting above your name.
  greeting: "¡Hola! I'm",

  // Short introduction in the first screen. Keep it to two or three sentences.
  introduction:
    "I build computational methods that turn messy biological data — protein sequences, genomes, and the scientific literature itself — into structured knowledge and testable hypotheses. I grew up in Lima, Peru, trained as an environmental engineer, and found my way to computational biology through the bench, the field, and a lot of Python.",

  // Used for search engines and link previews.
  seoDescription:
    "Alen Zimic-Sheen is a PhD student in Computational Biology at Cornell University working on machine learning for biology, protein language models, and LLM-assisted knowledge extraction from the biological literature.",

  // Small facts shown next to the About text.
  quickFacts: [
    { label: "Based in", value: "Ithaca, NY" },
    { label: "From", value: "Lima, Peru" },
    { label: "Languages", value: "Spanish · English" },
    { label: "Fellowship", value: "SUNY Graduate Diversity Fellowship" },
  ],

  // Three research directions shown as cards.
  researchInterests: [
    {
      title: "Machine learning for biological sequences",
      body: "Protein language models, transfer learning, and interpretability — using foundation-model representations to predict function and to ask which residues the model actually relies on.",
      keywords: ["ESM3", "Protein LMs", "Interpretability"],
    },
    {
      title: "Knowledge from the literature",
      body: "LLM-assisted pipelines that extract gene–molecule–phenotype relations from full-text papers, keep sentence-level provenance, and assemble them into graphs that models can learn from.",
      keywords: ["Local LLMs", "Knowledge graphs", "Provenance"],
    },
    {
      title: "Genomics & data-driven discovery",
      body: "Comparative genomics, metagenomics, and reproducible analysis workflows — connecting sequencing data to biological mechanisms that can be tested in the lab.",
      keywords: ["Genomics", "Metagenomics", "Reproducibility"],
    },
  ],

  email: "amz63@cornell.edu",
  location: "Ithaca, NY",
  githubUsername: "alenzimic",
  githubUrl: "https://github.com/alenzimic",
  linkedInUrl: "https://linkedin.com/in/alen-zimic-sheen",
  cvUrl: "/assets/Alen-Zimic-CV.pdf",
  portraitImage: "/assets/alen-zimic-portrait.webp",
  portraitAlt: "Alen smiling outdoors at an archaeological site in the Peruvian Andes",

  // Closing line in the contact section.
  contactNote:
    "Happy to talk about computational biology, collaborations, mentoring, or where to find the best ceviche in Lima — in English or en español.",
};

export default profile;
