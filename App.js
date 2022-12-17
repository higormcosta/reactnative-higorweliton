import { StatusBar } from "expo-status-bar";
import Medicines from "./components/Medicines";

export default function App() {
  return (
    <>
      <Medicines />
      <StatusBar style="auto" />
    </>
  );
}
