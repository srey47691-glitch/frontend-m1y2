"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { MenuList } from "@/lib/menu-list";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function MobileNavbarComponent() {
  const pathName = usePathname();
  console.log(`===> pathname: ${pathName}`);
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger
        className="lg:hidden"
        render={<Button variant="outline" size="icon" />}
      >
        <MenuIcon className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent side="top" className="max-h-screen overflow-auto">
        <SheetHeader>
          <SheetTitle>
            <a
              href="https://www.shadcnblocks.com"
              className="flex items-center gap-2"
            >
              <Image
                src="https://cdn.shadcnblocks.com/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                className="max-h-8"
                width={200}
                height={200}
                alt="Shadcn UI Navbar"
              />
              <span className="text-lg font-semibold tracking-tighter">
                Shadcnblocks.com
              </span>
            </a>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col p-4">
          <div className="flex flex-col gap-6">
            {MenuList.map(({ url, name }) => (
              <Link
                href={url}
                key={name}
                style={pathName === url ? { color: "red" } : { color: "black" }}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <Button variant="outline" onClick={() => router.push("/login")}>
              Log in
            </Button>
            <Button variant="outline" onClick={() => router.push("/register")}>
              Start for free
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}