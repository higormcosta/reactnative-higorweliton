import { View, StyleSheet } from "react-native";
import { MedicineContextProvider } from "../contexts/MedicineContext";
import MedicineInput from "./MedicineInput";
import MedicineList from "./MedicineList";

const Medicines = () => {
  return (
    <View style={styles.container}>
      <MedicineContextProvider>
        <MedicineInput />
        <MedicineList />
      </MedicineContextProvider>
    </View>
  );
};

export default Medicines;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
