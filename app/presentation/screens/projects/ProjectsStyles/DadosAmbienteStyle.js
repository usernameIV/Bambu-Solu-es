import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";


const stylesAmbiente = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CORES.branco,
      paddingHorizontal: 20,
      top: 10,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    texto: {
      fontSize: 18,
      color: CORES.secundaria,
      flex: 1,
    },
    checkbox: {
      marginRight: 10,
    },
    title: {
      backgroundColor: CORES.principal,
      padding: 20,
      marginTop: 10,
      marginBottom: 20,
      alignItems: "center",
      borderRadius: 10,
    },
    titleText: {
      color: CORES.branco,
      fontSize: 20,
      textAlign: "center",
    },
  });
export default stylesAmbiente;
  