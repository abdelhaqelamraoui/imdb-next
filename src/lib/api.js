const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

/**
 * Fetch data from the API.
 *
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {object} [options={}] - Additional options for the fetch request.
 * @returns {Promise<object>} The JSON response from the API.
 * @throws {Error} If the fetch request fails or the response is not ok.
 */
export async function apiFetch(endpoint, options = {}) {
   const url = `${API_URL}${endpoint}${
      endpoint.includes("?") ? "&" : "?"
   }api_key=${API_KEY}&language=en-US`;

   const fetchOptions = {
      headers: {
         "content-type": "application/json",
         ...(options.headers || {}),
      },
      ...options,
   };

   if (options.next) {
      fetchOptions.next = options.next;
   }

   const response = await fetch(url, fetchOptions);

   if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
   }

   return response.json();
}
