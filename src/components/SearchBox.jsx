"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
   const [search, setSearch] = useState("");
   const router = useRouter();

   const handleSubmit = (e) => {
      e.preventDefault();
      router.push(`/search/${search}`);
   };

   return (
      <form
         className="flex justify-between px-5 max-w-6xl mx-auto mt-4"
         onSubmit={(e) => handleSubmit(e)}
      >
         <input
            type="text"
            placeholder="Search keywords..."
            className="w-full h-10 placeholder-gray-500 outline-none bg-transparent flex-1 border-b border-b-amber-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <button
            className=" disabled:text-gray-600 disabled:opacity-90 disabled:cursor-auto hover:opacity-90 cursor-pointer bg-amber-500 px-4 rounded-lg ml-2 dark:text-white"
            disabled={search === ""}
         >
            Search
         </button>
      </form>
   );
}
