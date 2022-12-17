import { Pressable, View, Text, StyleSheet } from "react-native";

const MedicineItem = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.medicineListItem}>
        <Text style={styles.medicineListItemText}>
          Descrição: {props.medicine.description}
        </Text>
        <Text style={styles.medicineListItemText}>
          Valor: {props.medicine.price}
        </Text>
      </View>
    </Pressable>
  );
};

export default MedicineItem;

const styles = StyleSheet.create({
  medicineListItem:  {
      padding: 10,
      border: 1,
      backgroundColor: "#F19525",
      margin: 8,
  },
  medicineListItemText: {
      fontSize: 22,
      color: "#003E75",
      textDecorationLine: "none",
  },
});
