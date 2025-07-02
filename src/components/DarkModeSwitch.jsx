"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkModeSwitch() {
   const { theme, setTheme, systemTheme } = useTheme();
   const currentTheme = theme === "system" ? systemTheme : theme;
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <div>
         {mounted &&
            (currentTheme === "dark" ? (
               <MdLightMode
                  className="cursor-pointer hover:text-amber-500"
                  onClick={() => setTheme("light")}
               />
            ) : (
               <MdDarkMode
                  className="cursor-pointer hover:text-amber-500"
                  onClick={() => setTheme("dark")}
               />
            ))}
      </div>
   );
}

export default DarkModeSwitch;
