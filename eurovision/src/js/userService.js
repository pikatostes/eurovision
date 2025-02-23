const API_URL = "http://localhost:8000/users";

// Obtener todos los usuarios
export const getUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Obtener un usuario por ID
export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// Crear un nuevo usuario
export const createUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Actualizar un usuario por ID
export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Eliminar un usuario por ID
export const deleteUser = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};