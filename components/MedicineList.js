import { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, Alert } from "react-native";
import { MedicineContext } from "../contexts/MedicineContext";
import { findAllMedicines } from "../services/MedicineApi";

import MedicineItem from "./MedicineItem";

const MedicineList = () => {
  const medicineContext = useContext(MedicineContext);

  const onEditHandler = ({ id }) => {
    medicineContext.setCurrentMedicine(medicineContext.medicineList.find(it => it.id === id));
  }

  useEffect(() => {
    const findAll = async () => {
      try {
        const response = await findAllMedicines();
        medicineContext.setMedicines(response.data);
      } catch (e) {
        Alert.alert("Erro", "Não foi possível carregar os medicamentos!");
      }
    };
    findAll();
  }, []);

  return (
    <View style={styles.medicineList}>
      <ScrollView>
        {medicineContext.medicineList.map((medicine) => (
          <MedicineItem
            key={medicine.id}
            medicine={medicine}
            onPress={() => onEditHandler(medicine)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MedicineList;

const styles = StyleSheet.create({
  medicineList: {
    flex: 2,
    backgroundColor: "lightyellow",
    paddingTop: 8,
  },
});
