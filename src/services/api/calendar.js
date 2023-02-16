const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;

export function fetchEvents(date, libGroup) {
  return fetch(
    `${API_URL}/evenements?concerne.lib_groupe=${libGroup}&date=${date}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  ).then((response) => response.json());
}
export function fetchGroups() {
  return fetch(`${API_URL}/groupe/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
}
