import api from "../axios";
import { createContactList } from "../contacts/contactList";

const register = async (user) => {
  try {
    const response = await api.post("users", user);
    const data = response.data;
    if (data) {
      const contactListResponse = await createContactList(data);
      console.log("contactListResponse", contactListResponse);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { register };
