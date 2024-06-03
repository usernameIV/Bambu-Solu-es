import { StyleSheet } from 'react-native';
import CORES from '../../../constants/cores';

const Button2Styles = StyleSheet.create({
    button: {
        backgroundColor: CORES.branco,
        width: '70%',
        borderRadius: 20,
        marginTop: '30%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: CORES.secundaria,
        fontSize: 24,
    },
});

export default Button2Styles;
