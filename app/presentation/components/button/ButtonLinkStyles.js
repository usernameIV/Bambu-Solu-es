import { StyleSheet } from 'react-native';
import CORES from '../../../constants/cores';

const styles = StyleSheet.create({
  button: {
    backgroundColor: CORES.secundaria,
    width: "90%",
    borderRadius: 10,
    height: 50,
    margin: "auto",
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  buttonText: {
    color: CORES.branco,
    fontWeight: "bold",
  },
});

export default styles;