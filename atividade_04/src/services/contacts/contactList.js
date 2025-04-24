import api from "../axios";

const createContactList = async (user) => {
  try {
    console.log("daaata", user);
    const body = {
      userId: user.id,
      contactList: [],
    };
    const response = await api.post("contactList", body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserContactList = async (userId) => {
  try {
    const response = await api.get(`/contactList`, {
      params: { userId },
    });
    const data = response.data[0];
    console.log("contactList for user:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar contactList:", error);
  }
};

const addContact = async (contactListId, contact) => {
  try {
    const response = await api.put(`contactList/${contactListId}`, contact);
    const data = response.data;
    console.log("contactList for user:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar contactList:", error);
  }
};

const updateContactList = async (contactListId, contact) => {
  try {
    const response = await api.put(`/contactList/${contactListId}`, contact);
    const data = response.data;
    console.log("contactList for user:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar contactList:", error);
  }
};

export { createContactList, getUserContactList, addContact, updateContactList };
