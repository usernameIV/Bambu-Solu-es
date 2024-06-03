import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CORES from '../../../constants/cores';

const AgendaScreen = () => {
  const month = 'Julho';
  const year = 2020;

  const daysOfMonth = [
    '28', '29', '30', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '10', '11',
    '12', '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30', '31', '1'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.monthYear}>{month} ({year})</Text>
      </View>

      <View style={styles.calendarContainer}>
        <View style={styles.weekdaysRow}>
          <Text style={styles.weekday}>D</Text>
          <Text style={styles.weekday}>S</Text>
          <Text style={styles.weekday}>T</Text>
          <Text style={styles.weekday}>Q</Text>
          <Text style={styles.weekday}>Q</Text>
          <Text style={styles.weekday}>S</Text>
          <Text style={styles.weekday}>S</Text>
        </View>

        <View style={styles.daysContainer}>
          {daysOfMonth.map((day, index) => (
            <Text key={index} style={styles.day}>{day}</Text>
          ))}
        </View>
      </View>

      <View style={styles.selectionContainer}>
        <TouchableOpacity>
          <Text style={styles.selectionText}>Mês ↓</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.selectionText}>Ano ↓</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Registrar{'\n'}ação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.configButton}>
          <Text style={styles.buttonText}>Configuração ⚙</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.dayInfoContainer}>
        <Text style={styles.dayInfoTitle}>09 de Julho</Text>
        <View style={styles.eventsContainer}>
          <View style={styles.event}>
            <Text style={styles.eventText}>- Fazer um bolo - 16:30</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>✏</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.event}>
            <Text style={styles.eventText}>- Correr - 18:30</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>✏</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.event}>
            <Text style={styles.eventText}>- Reunião de trabalho - 20:00</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>✏</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default AgendaScreen;
