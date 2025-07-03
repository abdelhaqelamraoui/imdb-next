import Results from "@/components/Results";
import { apiFetch } from "@/lib/api";

export default async function Home({ searchParams }) {
   const { genre } = (await searchParams) || "fetchTending";

   const endpoint =
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week";
   const data = await apiFetch(`${endpoint}?page=1`, {
      next: { revalidate: 10000 },
   });
   const results = data.results;

   return (
      <div>
         <Results results={results} genre={genre} />
      </div>
   );
}
