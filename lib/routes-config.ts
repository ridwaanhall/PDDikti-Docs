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
      {
        title: "Program Studi Endpoints",
        href: "/prodi",
        items: [
          { title: "Detail", href: "/detail" },
          { title: "Deskripsi", href: "/desc" },
          { title: "Jumlah Mhs dan Dosen", href: "/num-students-lecturers" },
          { title: "Riwayat", href: "/riwayat" },
          { title: "Biaya Kuliah", href: "/biaya-kuliah" },
          { title: "Dosen Homebase", href: "/dosen-homebase" },
          { title: "Dosen Penghitung Rasio", href: "/dosen-penghitung-ratio" },
        ],
      },
      {
        title: "Dosen Endpoints",
        href: "/dosen",
        items: [
          { title: "Profil", href: "/profile" },
          { title: "Mengajar", href: "/teaching-history" },
          { title: "Pendidikan", href: "/study-history" },
          { title: "Penelitian", href: "/penelitian" },
          { title: "Pengabdian", href: "/pengabdian" },
          { title: "Karya", href: "/karya" },
          { title: "Paten dan Hak Cipta", href: "/paten" },
        ],
      },
      {
        title: "Mahasiswa Endpoints",
        href: "/mhs",
        items: [
          { title: "Detail", href: "/detail" },
        ],
      },
      {
        title: "Statistics Endpoints",
        href: "/stats",
        items: [
          { title: "PT", href: "/pt-count" },
          { title: "PT Akreditasi", href: "/pt-count-akreditasi" },
          { title: "PT Bentuk", href: "/pt-count-bentuk-pt" },
          { title: "PT Kelompok Pembina", href: "/pt-count-kelompok-pembina" },
          { title: "PT Provinsi", href: "/pt-count-province" },
          { title: "Prodi", href: "/prodi-count" },
          { title: "Prodi Akreditasi", href: "/prodi-count-akreditasi" },
          { title: "Prodi Bidang Ilmu", href: "/prodi-count-bidang-ilmu" },
          { title: "Prodi Bidang Ilmu Terbanyak", href: "/prodi-count-bidang-ilmu-terbanyak" },
          { title: "Prodi Jenjang Pendidikan", href: "/prodi-count-jenjang" },
          { title: "Prodi Kelompok Pembina", href: "/prodi-count-kelompok-pembina" },
          { title: "Dosen", href: "/dosen-count" },
          { title: "Dosen Aktif", href: "/dosen-count-active" },
          { title: "Dosen Bidang Ilmu", href: "/dosen-count-bidang" },
          { title: "Dosen Kelamin", href: "/dosen-count-gender" },
          { title: "Dosen Ikatan Kerja", href: "/dosen-count-ikatan" },
          { title: "Dosen Jenjang", href: "/dosen-count-jenjang" },
          { title: "Dosen Keaktifan", href: "/dosen-count-keaktifan" },
          { title: "Mahasiswa", href: "/mhs-count" },
          { title: "Mahasiswa Aktif", href: "/mhs-count-active" },
          { title: "Mahasiswa Bidang Ilmu", href: "/mhs-count-bidang-ilmu" },
          { title: "Mahasiswa Kelamin", href: "/mhs-count-gender" },
          { title: "Mahasiswa Jenjang", href: "/mhs-count-jenjang" },
          { title: "Mahasiswa Kelompok Lemabaga", href: "/mhs-count-kelompok-lembaga" },
          { title: "Mahasiswa Status", href: "/mhs-count-status" },
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
