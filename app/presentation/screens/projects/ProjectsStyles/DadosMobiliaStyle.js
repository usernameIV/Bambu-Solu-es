import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";
 
const StylesMobilia = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: CORES.branco,
      height: '100%',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      color: CORES.secundaria,
    },
    chipsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    chip: {
      borderWidth: 1,
      borderColor: CORES.principal,
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: CORES.branco,
      elevation: 6,
      margin: 5,
    },
    selectedChip: {
      backgroundColor: CORES.secundaria,
      borderColor: CORES.secundaria,
    },
    chipText: {
      color: CORES.preto,
    },
    selectedChipText: {
      color: CORES.branco,
    },
    roomItemsContainer: {
      marginTop: 10,
    },
    roomItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: CORES.principal,
      padding: 7,
      marginBottom: 12,
      backgroundColor: CORES.branco,
      elevation: 5,
    },
    roomItemText: {
      fontSize: 18,
      color: CORES.secundaria,
    },
    arrow: {
      fontSize: 25,
      color: CORES.secundaria,
    },
    button: {
      backgroundColor: CORES.secundaria,
      width: '90%',
      borderRadius: 10,
      height: 50,
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 6,
    },
    buttonText: {
      color: CORES.branco,
      fontWeight: 'bold',
    },
  });

  export default StylesMobilia;