const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;

export async function fetchAllGroupes() {
  return fetch(`${API_URL}/groupes`).then((response) => response.json());
}
export async function fetchAllEvenements() {
  return fetch(`${API_URL}/evenements`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
}
export async function fetchEvenementByLib(lib) {
  return fetch(`${API_URL}/evenements?lib_evenement=${lib}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
}

export async function fetchDeleteEvenement(id) {
  return fetch(`${API_URL}/evenements/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}
export async function fetchEvenementById(id) {
  return fetch(`${API_URL}/evenements/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
}
export async function fetchEditEvenement(idevenement, data) {
  return fetch(`${API_URL}/evenements/${idevenement}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ data }),
  }).then((response) => response.json());
}
