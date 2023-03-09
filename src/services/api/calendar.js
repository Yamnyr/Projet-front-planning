const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;

export function fetchEvents(startDate, endDate, libGroup) {
  console.log("startDate", startDate);
  return fetch(
    `${API_URL}/evenements/start/${startDate}/end/${endDate}?lib_groupe=${libGroup}`,
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
