import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";


const StylesAgenda = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: CORES.branco,
    },
    header: {
      alignItems: 'flex-start',
      marginBottom: 10,
    },
    monthYear: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    calendarContainer: {
      marginBottom: 20,
    },
    weekdaysRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    weekday: {
      fontSize: 16,
      fontWeight: 'bold',
      width: '14.28%',
      textAlign: 'center',
    },
    daysContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 120,
      marginTop: 70,
    },
    day: {
      fontSize: 16,
      width: '14.28%',
      textAlign: 'center',
      marginBottom: 5,
    },
    selectionContainer: {
      alignItems: 'flex-end',
      marginBottom: -60,
      right: 40,
    },
    selectionText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: CORES.secundaria,
      marginVertical: 5,
    },
    buttonsContainer: {
      alignItems: 'flex-start',
      marginBottom: 20,
    },
    actionButton: {
      backgroundColor: '#3A5340',
      color: CORES.secundaria,
      paddingVertical: 2,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginBottom: 10,
    },
    configButton: {
      backgroundColor: '#3A5340',
      color: '#3A5340',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    separator: {
      borderBottomColor: '#3A5340',
      borderBottomWidth: 2,
      marginTop: 150,
      marginBottom: 20,
    },
    dayInfoContainer: {
      marginBottom: 20,
    },
    dayInfoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    eventsContainer: {
      marginTop: 10,
    },
    event: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    eventText: {
      fontSize: 16,
    },
    editButton: {
      marginLeft: 'auto',
    },
    editButtonText: {
      fontSize: 20,
    },
});
export default StylesAgenda;  