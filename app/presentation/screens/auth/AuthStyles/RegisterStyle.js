import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";


const StylesRegister = StyleSheet.create({
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
        width: '100%',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: CORES.branco,
        marginBottom: 12,
        fontSize: 14,
        width: '70%',
        paddingRight: 40,
        color: CORES.branco,
        padding: 8,
    },
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
export default StylesRegister;