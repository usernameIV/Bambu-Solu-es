import { StyleSheet } from 'react-native';
import CORES from '../../../constants/cores';

const ButtonStyles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '90%',
    backgroundColor: CORES.secundaria,
    width: "80%",
    borderRadius: 10,
    height: 45,
    marginLeft: "10%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    activeOpacity: 0.8,
  },
  buttonText: {
    color: CORES.branco,
    fontWeight: "bold",
  },
});


export default ButtonStyles;