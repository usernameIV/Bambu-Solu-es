import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";

const StylesLogin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CORES.principal,
    },
    containerImage: {
        alignSelf: 'center',
        marginTop: '8%',
        marginBottom: '15%',
        width: '90%',
        flex: 1,
    },
    containerForm: {
        flex: 4,
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: CORES.branco,
        height: 40,
        marginBottom: 12,
        fontSize: 14,
        width: '70%',
        color: CORES.branco,
        padding: 8,
    },
    buttonEsqueceu: {
        marginTop: 20,
    },
    esqueceuText: {
        fontSize: 12,
        color: CORES.branco,
        textAlign: 'center',
    },
    registerText: {
        fontSize: 12,
        color: CORES.branco,
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    buttonRegister: {
        position: 'absolute',
        bottom: '15%',
    },
});


export default StylesLogin;