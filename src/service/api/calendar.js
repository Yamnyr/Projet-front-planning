const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;

export function fetchEvents(month) {
  return fetch(`${API_URL}/bookmarks?page=${month}`).then((response) =>
    response.json()
  );
}
