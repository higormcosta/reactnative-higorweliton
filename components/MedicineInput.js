import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';
import { useContext } from "react";
import { MedicineContext } from "../contexts/MedicineContext";
import { addNewMedicine, updateMedicine, deleteMedicine } from "../services/MedicineApi";

const MedicineInput = () => {
  const medicineContext = useContext(MedicineContext);

  const onAddHandler = async () => {
    try {
      if (medicineContext.medicine.id) {
        await updateMedicine(medicineContext.medicine);
        medicineContext.updateMedicine(medicineContext.medicine);
      } else {
        const { data: newMedicineCreated } = await addNewMedicine(medicineContext.medicine);
        medicineContext.addMedicine(newMedicineCreated);
      }
      clear();
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar o medicamento!");
    }
  };

  const onDeleteHandler = async () => {
    try {
      await deleteMedicine(medicineContext.medicine);
      medicineContext.deleteMedicine(medicineContext.medicine);
      clear();
    } catch (e) {
      Alert.alert("Erro", "Não foi possível excluir o medicamento selecionado!");
    }
  };

  const clear = () => {
    medicineContext.setCurrentMedicine({ id: undefined, 'description': '', 'active': 'Ativo', 'lastPurchase': '', 'price': '', 'buyingFactor': '1' });
  };
  
  return (
    <View style={styles.medicineInput}>
      <TextInput
        style={styles.medicineTextInput}
        placeholder="Descrição"
        maxLength={64}
        value={medicineContext.medicine.description}
        onChangeText={(description) => medicineContext.setCurrentMedicine({...medicineContext.medicine, description})}
      />
      <MaskInput
        style={styles.medicineTextInput}
        placeholder="Última Compra"
        mask={Masks.DATE_DDMMYYYY}
        value={medicineContext.medicine.lastPurchase}
        onChangeText={(lastPurchase) => medicineContext.setCurrentMedicine({...medicineContext.medicine, lastPurchase})}
      />
      <TextInput
        style={styles.medicineTextInput}
        placeholder="Status"
        maxLength={16}
        value={medicineContext.medicine.active}
        onChangeText={(active) => medicineContext.setCurrentMedicine({...medicineContext.medicine, active})}
      />
      <MaskInput
        style={styles.medicineTextInput}
        placeholder="Preço"
        value={medicineContext.medicine.price}
        keyboardType='numeric'
        mask={Masks.BRL_CURRENCY}
        onChangeText={(price) => medicineContext.setCurrentMedicine({...medicineContext.medicine, price})}
      />
      <TextInput
        style={styles.medicineTextInput}
        placeholder="Fator de Compra"
        value={medicineContext.medicine.buyingFactor}
        keyboardType='numeric'
        maxLength={3}
        onChangeText={(buyingFactor) => medicineContext.setCurrentMedicine({...medicineContext.medicine, buyingFactor})}
      />
      <View style={styles.buttonView}>
        <Button title="Salvar" onPress={onAddHandler} />
        { medicineContext.medicine.id && <Button title="Excluir" onPress={onDeleteHandler}/> }
        <Button title="Cancelar" onPress={clear} />
      </View>
    </View>
  );
};

export default MedicineInput;

const styles = StyleSheet.create({
  medicineInput: {
    flex: 6,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003F75",
    paddingTop: 16,
  },
  medicineTextInput: {
    borderWidth: 1,
    borderColor: "#F19525",
    color: "#F19525",
    padding: 10,
    margin: 5,
    fontSize: 24,
    width: "80%",
    marginRight: 8,
  }, 
  buttonView: {
    flexDirection: "row",
    width: "60%",
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "space-between"
  },
});
