import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";

const StylesEsqueciSenha = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: CORES.principal,
    },
    circleContainer: {
        alignItems: 'center',
        marginTop: '25%',
    },
    outerCircle: {
        borderWidth: 3,
        borderColor: CORES.secundaria,
        borderRadius: 100,
        padding: 5,
    },
    innerCircle: {
        backgroundColor: CORES.secundaria,
        borderRadius: 100,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    mainText: {
        color: CORES.branco,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    }, 
    infoText: {
        color: CORES.branco,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    containerForm: {
        flex: 4,
        alignItems: 'center',
        marginTop: '20%',
    },
    input: {
        borderWidth: 2,
        borderColor: CORES.branco,
        height: 50,
        fontSize: 14,
        width: '80%',
        color: CORES.branco,
        padding: 8,
    },
});

export default StylesEsqueciSenha;