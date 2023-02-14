const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;

export async function fetchAllGroupes() {
  return fetch(`${API_URL}/groupes`).then((response) => response.json());
}
export async function fetchNewGroupe(
  libgroupe,
  descriptiongroupe,
  GroupeParent,
  couleurgroupe,
  ListUserChecked
) {
  return fetch(`${API_URL}/groupes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      libGroupe: libgroupe,
      descGroupe: descriptiongroupe,
      groupeParent: `api/groupes/${GroupeParent}`,
      color: couleurgroupe,
      utilisateurs: ListUserChecked,
    }),
  }).then((response) => response.json());
}

export async function fetchDeleteGroupe(id) {
  return fetch(`${API_URL}/groupes/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

export default {
  fetchAllGroupes,
  fetchNewGroupe,
};
