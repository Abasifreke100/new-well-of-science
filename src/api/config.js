const BASE_URL = "https://wellofsciencebackend.adaptable.app/api/v1"

export const fetchRecentPost = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();
  return data;
};


