const BASE_URL = "https://api.wellofscience.com"

export const fetchRecentPost = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();
  return data;
};


