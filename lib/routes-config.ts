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
          { title: "Jumlah Perguruan Tinggi", href: "/pt-count" },
          { title: "Perguruan Tinggi Akreditasi", href: "/pt-count-akreditasi" },
          { title: "Perguruan Tinggi Bentuk Lembaga", href: "/pt-count-bentuk-pt" },
          { title: "Perguruan Tinggi Kelompok Pembina", href: "/pt-count-kelompok-pembina" },
          { title: "Perguruan Tinggi Provinsi", href: "/pt-count-province" },
          { title: "Jumlah Program Studi", href: "/prodi-count" },
          { title: "Program Studi Akreditasi", href: "/prodi-count-akreditasi" },
          { title: "Program Studi Bidang Ilmu", href: "/prodi-count-bidang-ilmu" },
          { title: "Program Studi Bidang Ilmu Terbanyak", href: "/prodi-count-bidang-ilmu-terbanyak" },
          { title: "Program Studi Jenjang Pendidikan", href: "/prodi-count-jenjang" },
          { title: "Program Studi Kelompok Pembina", href: "/prodi-count-kelompok-pembina" },
          { title: "Jumlah Dosen", href: "/dosen-count" },
          { title: "Dosen Aktif", href: "/dosen-count-active" },
          { title: "Dosen Bidang Ilmu", href: "/dosen-count-bidang" },
          { title: "Dosen Jenis Kelamin", href: "/dosen-count-gender" },
          { title: "Dosen Ikatan Kerja", href: "/dosen-count-ikatan" },
          { title: "Dosen Jenjang Pendidikan", href: "/dosen-count-jenjang" },
          { title: "Dosen Status Keaktifan", href: "/dosen-count-keaktifan" },
          { title: "Jumlah Mahasiswa", href: "/mhs-count" },
          { title: "Mahasiswa Aktif", href: "/mhs-count-active" },
          { title: "Mahasiswa Bidang Ilmu", href: "/mhs-count-bidang-ilmu" },
          { title: "Mahasiswa Jenis Kelamin", href: "/mhs-count-gender" },
          { title: "Mahasiswa Jenjang Pendidikan", href: "/mhs-count-jenjang" },
          { title: "Mahasiswa Kelompok Lemabaga", href: "/mhs-count-kelompok-lembaga" },
          { title: "Mahasiswa Status", href: "/mhs-count-status" },
        ],
      },
      {
        title: "Prodi Bidang Ilmu Endpoints",
        href: "/prodi-bidang-ilmu",
        items: [
          { title: "Agama", href: "/agama" },
          { title: "Ekonomi", href: "/ekonomi" },
          { title: "Humaniora", href: "/humaniora" },
          { title: "Kesehatan", href: "/kesehatan" },
          { title: "MIPA", href: "/mipa" },
          { title: "Pendidikan", href: "/pendidikan" },
          { title: "Pertaianan", href: "/pertanian" },
          { title: "Seni", href: "/seni" },
          { title: "Sosial", href: "/sosial" },
          { title: "Teknik", href: "/teknik" },
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
