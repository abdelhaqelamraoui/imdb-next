"use client";

import React, { useEffect } from "react";

export default function error({ error, reset }) {
   useEffect(() => {
      console.log(error);
   }, [error]);
   return (
      <div className="mt-10 text-center">
         <h1 className="">Something wen wrong. Please try again.</h1>
         <button className="hover:text-amber-600" onClick={() => reset()}>
            Try Again
         </button>
      </div>
   );
}
