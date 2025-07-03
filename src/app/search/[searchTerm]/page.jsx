import Results from "@/components/Results";
import { apiFetch } from "@/lib/api";

export default async function SearchPage({ params }) {
   const { searchTerm } = await params;

   const endpoint = `/search/movie?query=${searchTerm}&page=1&include_adult=false`;

   const data = await apiFetch(endpoint);
   const results = data.results;

   return (
      <div>
         {results && results.length == 0 && (
            <h1 className="text-center p-6">No results found</h1>
         )}

         {results && <Results results={results} />}
      </div>
   );
}
