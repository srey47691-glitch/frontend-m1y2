

"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import { MenuList } from "@/lib/menu-list";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function WindowNavbarComponent() {
  const pathName = usePathname();
  console.log(`===> pathname: ${pathName}`);
  const router = useRouter();
  return (
    <>
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
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {MenuList.map(({ url, name }) => (
            <NavigationMenuLink
              key={name}
              href={url}
              className={navigationMenuTriggerStyle()}
              style={pathName === url ? { color: "red" } : { color: "black" }}
            >
              {name}
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden items-center gap-4 lg:flex">
        <Button variant="outline" onClick={() => router.push("/login")}>
          Log in
        </Button>
        <Button variant="outline" onClick={() => router.push("/register")}>
          Start for free
        </Button>
      </div>
    </>
  );
}
