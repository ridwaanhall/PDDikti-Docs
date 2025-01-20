// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Memulai",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Pengantar", href: "/introduction" },
      {
        title: "Instalasi",
        href: "/installation",
      },
      {
        title: "List API",
        href: "/list-api",
      },
      {
        title: "Search Endpoints",
        href: "/search",
        items: [
          { title: "Semua", href: "/all" },
          { title: "Perguruan Tinggi", href: "/pt" },
          { title: "Program Studi", href: "/prodi" },
          { title: "Dosen", href: "/dosen" },
          { title: "Mahasiswa", href: "/mhs" },
        ],
      },
      {
        title: "Perguruan Tinggi Endpoints",
        href: "/pt",
        items: [
          { title: "Detail", href: "/detail" },
          { title: "Prodi", href: "/prodi" },
          { title: "Rasio", href: "/rasio" },
          { title: "Mahasiswa", href: "/mhs" },
          { title: "Waktu Studi", href: "/waktu-studi" },
          { title: "Riwayat", href: "/riwayat" },
          { title: "Biaya Kuliah", href: "/biaya-kuliah" },
          { title: "Fasilitas", href: "/fasilitas" },
          { title: "Logo", href: "/logo" },
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
