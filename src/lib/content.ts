export type EntryFrontmatter = {
  title: string;
  tabLabel?: string;
  subtitle?: string;
  date?: string;
  draft?: boolean;
  status?: string;
  publicationType?: "article" | "review";
  href?: string;
  repositoryHref?: string;
  authors?: string;
  journal?: string;
  summary?: string;
  dateWritten?: string;
  readingTime?: string;
  figureImage?: string;
  figureWidth?: number;
  figureHeight?: number;
  figureAlt?: string;
  figureCaption?: string;
  figureSource?: string;
  visual?: string;
  venue?: string;
  pi?: string;
  kind?: string;
  doi?: string;
  linkLabel?: string;
  category?: "under-review" | "peer-reviewed" | "proceedings" | "in-preparation";
  order?: number;
  tags?: string[];
};

export type MarkdownModule = {
  frontmatter: EntryFrontmatter;
  Content: any;
};

export type SiteEntry = EntryFrontmatter & {
  slug: string;
  Component: any;
};

export function collection(modules: Record<string, MarkdownModule>): SiteEntry[] {
  return Object.entries(modules)
    .map(([path, module]) => ({
      ...module.frontmatter,
      slug: path.split("/").pop()?.replace(/\.md$/, "") ?? path,
      Component: module.Content,
    }))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function firstEntry(modules: Record<string, MarkdownModule>): SiteEntry {
  const [entry] = collection(modules);

  if (!entry) {
    throw new Error("Expected at least one Markdown entry.");
  }

  return entry;
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

/** Escapes an author list and bolds Alen's name in it. */
export function highlightAuthor(authors = ""): string {
  return escapeHtml(authors).replace(
    /(A\.?\s?Zimi[cć][- ]Sheen)/g,
    "<strong>$1</strong>",
  );
}

export const publicationGroups = [
  { key: "under-review", label: "Under review", es: "en revisión" },
  { key: "peer-reviewed", label: "Peer-reviewed articles", es: "artículos" },
  { key: "proceedings", label: "Conference proceedings", es: "congresos" },
  { key: "in-preparation", label: "In preparation", es: "en preparación" },
] as const;

/** Publications that get their own notes page. */
export const hasNotesPage = (entry: EntryFrontmatter) =>
  entry.category !== undefined && entry.category !== "in-preparation";

/** Escapes text and turns *word* into <em>word</em> (e.g. species names). */
export function inlineMarkdown(text = ""): string {
  return escapeHtml(text).replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
