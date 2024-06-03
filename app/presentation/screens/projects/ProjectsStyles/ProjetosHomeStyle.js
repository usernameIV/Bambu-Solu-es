import CORES from "../../../../constants/cores";
import { StyleSheet } from "react-native-web";
 
const StylesProjetoHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CORES.branco,
    },
    cabecalho: {
        backgroundColor: CORES.secundaria,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
    },
    namePage: {
        flex: 1,
        fontSize: 25,
        color: CORES.branco,
        marginLeft: 10,
    },
    circleContainer: {
        alignItems: 'center',
        marginTop: '25%',
        opacity: 0.9,
    },
    outerCircle: {
        borderWidth: 3,
        borderColor: CORES.principal,
        borderRadius: 100,
        padding: 5,
        opacity: 0.9,
    },
    innerCircle: {
        backgroundColor: CORES.principal,
        borderRadius: 100,
        padding: 10,
        opacity: 0.9,
    },
    image: {
        width: 100,
        height: 100,
    },
    mainText: {
        color: CORES.principal,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        opacity: 0.9,
    },
    infoText: {
        color: CORES.principal,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.9,
    },
    button: {
        alignSelf: 'center',
        marginTop: "25%",
    },
    plus:{
        width: 80,
        height: 80,
    },
    BotoesTemporarios:{
        flexDirection:"row" ,
        justifyContent:"space-evenly"
    },
});

export default StylesProjetoHome;