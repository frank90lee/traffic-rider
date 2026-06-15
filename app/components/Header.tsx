import React from "react";
// import LanguageSwitcher from "./LanguageSwitcher";
import { MenuItem, TranslationProps } from "@/types/Index";

interface HeaderProps extends TranslationProps {
  showNavItems?: boolean;
}

const Header = ({ t, showNavItems = true }: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 md:py-4 sticky top-0 w-full z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-2">
          <a href="/" className="hover:opacity-90 transition-opacity">
            <p className="text-xl md:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 font-sans font-black">R</span>
              {t("header.title")}
            </p>
          </a>
        </div>
        {showNavItems && (
          <div className="hidden md:flex items-center space-x-8">
            {t.raw("nav.items").map((menu: MenuItem, index: number) => (
              <a 
                key={index} 
                href={menu.link} 
                className="text-sm font-semibold text-slate-600 hover:text-cyan-600 transition-colors"
              >
                {menu.title}
              </a>
            ))}
            <a 
              href="/#play" 
              className="px-5 py-2 bg-slate-900 text-cyan-400 text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-md shadow-cyan-100 border border-cyan-400/20"
            >
              Play Now
            </a>
          </div>
        )}
        {/* <LanguageSwitcher /> */}
      </nav>
    </header>
  );
};

export default Header;
