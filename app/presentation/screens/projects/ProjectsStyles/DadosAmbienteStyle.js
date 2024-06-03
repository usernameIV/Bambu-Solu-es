import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";


const StylesAmbiente = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CORES.branco,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    texto: {
      fontSize: 18,
      color: CORES.secundaria,
      flex: 1,
      padding: 20,
    },
    checkbox: {
      marginRight: 20,
    },
    title: {
      backgroundColor: CORES.principal,
      padding: 20,
      alignItems: "center",
      borderRadius: 10,
      marginHorizontal: 10,
      marginVertical: 10,
    },
    titleText: {
      color: CORES.branco,
      fontSize: 20,
      textAlign: "center",
    },
  });
export default StylesAmbiente;
  