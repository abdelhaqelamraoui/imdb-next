import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export default async function Home({ searchParams }) {
   const { genre } = (await searchParams) || "fetchTending";

   const response = await fetch(
      `${API_URL}${
         genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=1`
   );

   if (!response.ok) {
      throw new Error("Failed to fetch data");
   }

   const data = await response.json();
   const results = data.results;

   console.log(results);

   return (
      <div>
         <Results results={results} genre={genre} />
      </div>
   );
}
