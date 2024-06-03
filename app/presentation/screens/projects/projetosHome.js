import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonPlus from '../../components/button/ButtonPlus';
import StylesProjetoHome from './ProjectsStyles/ProjetosHomeStyle';
export default function ProjetosHome() {
    
    return (
        <View style={StylesProjetoHome.container}>
            <View style={StylesProjetoHome.cabecalho}>
                <Image source={require('../../assets/icons/iconLogo.png')}/>
                <Text style={StylesProjetoHome.namePage}>Projetos</Text>
            </View>
            <View style={StylesProjetoHome.circleContainer}>
                <View style={StylesProjetoHome.outerCircle}>
                    <View style={StylesProjetoHome.innerCircle}>
                        <Image
                            source={require('../../assets/icons/iconLogo.png')}
                            style={StylesProjetoHome.image}
                            resizeMode='contain'
                        />
                    </View>
                </View>
            </View>
 
            <Text style={StylesProjetoHome.mainText}>Não existem projetos no{'\n'}momento</Text>
            <Text style={StylesProjetoHome.infoText}>Adicionar um{'\n'}novo projeto</Text>

            <View style={StylesProjetoHome.BotoesTemporarios}>             
                <ButtonPlus href={"./DadosCliente"} ImgSource = {require('../../assets/icons/iconAdd.png')}/>
            </View>
            
                <ButtonPlus href={"./Agenda"} ImgSource = {require('../../assets/icons/iconAdd.png')}/>    
                <Text style={StylesProjetoHome.infoText}>AGENDA!</Text>
        </View>
    );
};
<<<<<<< HEAD
  
const styles = StyleSheet.create({
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
=======
 
>>>>>>> 65ade162e94d8f613afd5a3790834779f1eac290
