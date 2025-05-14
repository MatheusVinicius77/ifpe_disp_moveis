import api from "../axios";

const login = async (user) => {
  try {
    const response = await api.get("users/:id", name);
  } catch (error) {
    console.log(error);
  }
};

const all_users = async () => {
  try {
    const response = await api.get("users");
    console.log("todos os usuários", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default all_users;
