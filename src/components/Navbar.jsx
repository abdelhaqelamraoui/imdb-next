import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
   return (
      <div className="flex bg-amber-100 dark:bg-gray-600 p-4 lg:text-lg justify-center gap-6">
         <NavbarItem title="Trending" param="fetchTending" />
         <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
   );
}
