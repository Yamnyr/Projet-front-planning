const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;

export async function fetchAllGroupes() {
  return fetch(`${API_URL}/groupes`).then((response) => response.json());
}

export async function deleteGroupe(id) {
  return fetch(`${API_URL}/groupes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export default {
  fetchAllGroupes,
  deleteGroupe,
};
