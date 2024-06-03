import { StyleSheet } from 'react-native';
import CORES from '../../../../../constants/cores';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: CORES.branco,
  },
  card: {
    width: "95%",
    height: "80%",
    backgroundColor: CORES.principal,
    borderRadius: 10,
    padding: 15,
    marginBottom: 100,
    marginVertical: 10,
    justifyContent: "flex-start",
  },
  roomItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    backgroundColor: CORES.branco,
  },
  roomItemText: {
    fontSize: 18,
    color: CORES.preto,
  },
  arrow: {
    fontSize: 18,
    color: CORES.preto,
  },
  dropdownContent: {
    padding: 15,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
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
  button: {
    backgroundColor: CORES.secundaria,
    width: "90%",
    borderRadius: 10,
    height: 50,
    margin: "auto",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  buttonText: {
    color: CORES.branco,
    fontWeight: "bold",
  },
});

export default commonStyles;
