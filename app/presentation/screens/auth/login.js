import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import CORES from '../../../constants/cores';
import * as Animatable from 'react-native-animatable';
import WhiteButton from '../../components/button/ButtonWhite';
import StylesLogin from './AuthStyles/loginStyle';


export default function Login() {
    return (
        <View style={StylesLogin.container}>
            <Animatable.Image 
                animation="fadeInLeft" 
                delay={500} 
                style={StylesLogin.containerImage} 
                source={require('../../assets/icons/logo.png')}
                resizeMode='contain'
            />
            <Animatable.View animation="fadeInUp" style={StylesLogin.containerForm}>
                <TextInput 
                    placeholder="E-mail" 
                    placeholderTextColor={CORES.branco}
                    style={StylesLogin.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput 
                    placeholder="Senha" 
                    placeholderTextColor={CORES.branco} 
                    style={StylesLogin.input} 
                    secureTextEntry
                />             
                <WhiteButton href='../projects/projetosHome' text='Login'/>

                <Link href='./EsqueciSenha' asChild>
                    <TouchableOpacity style={StylesLogin.buttonEsqueceu} activeOpacity={0.8}> 
                        <Text style={StylesLogin.esqueceuText}>Esqueceu a{'\n'}senha?</Text>
                    </TouchableOpacity>
                </Link>

                <Link href='./Register' asChild>
                    <TouchableOpacity style={StylesLogin.buttonRegister} activeOpacity={0.8}> 
                        <Text style={StylesLogin.registerText}>Registrar-se{'\n'}no bambu</Text>
                    </TouchableOpacity> 
                </Link>
            </Animatable.View>
        </View>
    );
};
<<<<<<< HEAD
 
const styles = StyleSheet.create({
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
    buttonEsqueceu: {
        marginTop: 20,
    },
    esqueceuText: {
        fontSize: 12,
        color: CORES.branco,
        textAlign: 'center',
        //fontFamily: fontFamily.body,
    },
    registerText: {
        fontSize: 12,
        color: CORES.branco,
        textDecorationLine: 'underline',
        textAlign: 'center',
        //fontFamily: fontFamily.body,
    },
    buttonRegister: {
        position: 'absolute',
        bottom: '15%',
    },
});
=======

>>>>>>> 65ade162e94d8f613afd5a3790834779f1eac290
