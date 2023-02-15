const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;

export async function fetchAllGroupes() {
  return fetch(`${API_URL}/groupes`).then((response) => response.json());
}
export async function fetchGroupeByLib(lib) {
  return fetch(`${API_URL}/groupes?lib_groupe=${lib}`).then((response) =>
    response.json()
  );
}

export async function fetchNewGroupe(data, ListUserChecked) {
  return fetch(`${API_URL}/groupes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(
      data.GroupeParent
        ? {
            libGroupe: data.libgroupe,
            descGroupe: data.descriptiongroupe,
            groupeParent: `api/groupes/${data.GroupeParent}`,
            color: data.couleurgroupe,
            utilisateurs: ListUserChecked,
          }
        : {
            libGroupe: data.libgroupe,
            descGroupe: data.descriptiongroupe,
            color: data.couleurgroupe,
            utilisateurs: ListUserChecked,
          }
    ),
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
  fetchGroupeByLib,
};
