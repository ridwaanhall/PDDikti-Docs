import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, HeartIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            Dibuat oleh{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/ridwaanhall"
            >
              ridwaanhall
            </Link>
            . Source code tersedia di{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/ridwaanhall/PDDIKTI-Docs"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://vercel.com/new/copilot-id/clone?demo-description=Dokumentasi%20ini%20menyediakan%20penjelasan%20tentang%20informasi%20detail%20dan%20statistik%20tentang%20mahasiswa%2C%20dosen%2C%20prodi%2C%20perguruan%20tinggi%20di%20Indonesia.&demo-image=&demo-title=PDDIKTI%20Docs&demo-url=https%3A%2F%2Fpddikti-docs.vercel.app%2F&from=templates&project-name=PDDIKTI%20Docs&repository-name=pddikti-docs&repository-url=https%3A%2F%2Fgithub.com%2Fridwaanhall%2FPDDIKTI-Docs"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link
        href="https://github.com/sponsors/ridwaanhall"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
