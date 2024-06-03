import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
