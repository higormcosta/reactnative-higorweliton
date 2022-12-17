import axios from "axios";

const apiUrl = "http://10.0.2.2:3000/medicines";

export const findAllMedicines = async () => {
  return await axios.get(apiUrl);
};

export const addNewMedicine = async (medicine) => {
  return await axios.post(apiUrl, medicine);
};

export const updateMedicine = async (medicine) => {
  return await axios.put(`${apiUrl}/${medicine.id}`, medicine);
};

export const deleteMedicine = async ({ id }) => {
  return await axios.delete(`${apiUrl}/${id}`);
};
