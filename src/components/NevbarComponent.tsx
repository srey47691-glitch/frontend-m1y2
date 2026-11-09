"use client";

import { cn } from "cn";

import MobileNavbarComponent from "./MobileNavbarComponent";
import WindowNavbarComponent from "./WindowNavbarComponent";

interface NavbarProps {
  className?: string;
}

const NavbarComponent = ({ className }: NavbarProps) => {
  return (
    <section className={cn("py-4", className)}>
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Window */}
          <WindowNavbarComponent />

          {/* Mobile */}
          <MobileNavbarComponent />
        </nav>
      </div>
    </section>
  );
};
export { NavbarComponent };
    
