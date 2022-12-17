import { createContext, useState } from "react";

export const MedicineContext = createContext({
  medicineList: [],
  addMedicine: (medicine) => {},
  updateMedicine: (medicine) => {},
  deleteMedicine: (medicine) => {},
  setMedicines: (medicines) => {},
  medicine: {},
  setMedicine: (medicine) => {}
});

export const MedicineContextProvider = ({ children }) => {
  const [medicineList, setMedicineList] = useState([]);
  const [medicine, setMedicine] = useState({ id: undefined, 'description': '', 'active': 'Ativo', 'lastPurchase': '', 'price': '', 'buyingFactor': '1' });

  const addMedicine = (medicine) => {
    setMedicineList((currentMedicineList) => [...currentMedicineList, medicine]);
  };

  const updateMedicine = (medicine) => {
    setMedicineList((currentMedicineList) => {
      const index = currentMedicineList.findIndex((t) => t.id === medicine.id);
      currentMedicineList[index] = medicine;
      return [...currentMedicineList];
    });
  };

  const deleteMedicine = (medicine) => {
    setMedicineList((medicineList) => [...medicineList.filter((it) => it.id !== medicine.id)]);
  };

  const setMedicines = (medicines) => setMedicineList(medicines);
  const setCurrentMedicine = (medicine) => setMedicine(medicine);

  return (
    <MedicineContext.Provider value={{ medicineList, addMedicine, updateMedicine, setMedicines, setCurrentMedicine, medicine, deleteMedicine }}>
      {children}
    </MedicineContext.Provider>
  );
};
