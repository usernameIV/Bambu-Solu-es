import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";
 
const StylesProjeto = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: CORES.branco,
    },
    header: {
      display: 'flex',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      bottom: 10,
    },
    card: {
      backgroundColor: CORES.principal,
      width: '105%',
      height: '80%',
      borderRadius: 10,
      padding: 20,
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    primary: {
      color: CORES.branco,
      fontSize: 24,
    },
    secondary: {
      color: CORES.branco,
      fontSize: 24,
    },
    primaryTopic: {
      color: CORES.branco,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      bottom: 20,
    },
    secondaryTopic: {
      color: CORES.branco,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      bottom: 20,
    },
    subTopic: {
      color: CORES.branco,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    description: {
      color: CORES.branco,
      fontSize: 16,
      marginBottom: 7,
    },
    status: {
      color: CORES.branco,
      fontSize: 14,
      bottom: 10,
    },
    innerButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    innerButton: {
      backgroundColor: CORES.branco,
      padding: 10,
      borderRadius: 5,
      width: '45%',
      alignItems: 'center',
      bottom: 40,
    },
    innerButtonText: {
      color: CORES.secundaria,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    outerButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 15,
    },
    createTaskButton: {
      backgroundColor: CORES.secundaria,
      padding: 10,
      borderRadius: 16,
      width: '48%',
      alignItems: 'center',
      height: 45,
    },
    deleteTaskButton: {
      backgroundColor: CORES.terciaria,
      padding: 10,
      borderRadius: 16,
      width: '48%',
      alignItems: 'center',
      height: 45,
    },
    outerButtonText: {
      color: CORES.branco,
      fontWeight: 'bold',
    },
    addButtonContainer: { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addButton: {
      backgroundColor: CORES.branco,
      width: '50%',
      borderRadius: 20,
      borderWidth: 2,
      borderColor: CORES.secundaria,
      padding: 10,
      alignItems: 'center',
    },
    addButtonText: {
      color: CORES.secundaria,
      fontWeight: 'bold',
    },
  });

export default StylesProjeto;

