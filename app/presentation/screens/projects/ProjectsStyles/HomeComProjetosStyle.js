import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";


const HomeComProjetosStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CORES.branco,
      alignItems: 'center',
      paddingVertical: 20,
    },
    card: {
      width: '90%',
      backgroundColor: CORES.principal,
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
      elevation: 10,
      alignItems: 'flex-start',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: CORES.branco,
      marginBottom: 10,
    },
    progressContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    phaseText: {
      fontSize: 14,
      color: CORES.branco,
    },
    progressText: {
      fontSize: 14,
      color: CORES.branco,
    },
    progressBar: {
      width: '100%',
      marginBottom: 10,
    },
    dateText: {
      fontSize: 14,
      color: CORES.branco,
    },
});

export default HomeComProjetosStyles;