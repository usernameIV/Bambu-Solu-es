import React, {useState} from 'react';
import {View} from 'react-native';
import CORES from '../../../constants/cores' ;
import * as Animatable from 'react-native-animatable';
import WhiteButton from '../../components/button/ButtonWhite';
import StylesRegister from './AuthStyles/RegisterStyle';
import InputLog from '../../components/input/TextInputLog';

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }
    };
    return (
        <View style={StylesRegister.container}>

            <Animatable.Image 
                animation="fadeInLeft" 
                delay={500} 
                style={StylesRegister.containerImage} 
                source={require('../../assets/icons/logo.png')}
                resizeMode='contain'
            />
            <Animatable.View animation="fadeInUp" style={StylesRegister.containerForm}>
                <InputLog 
                    placeholder={"E-mail"} 
                    placeholderTextColor={CORES.branco} 
                    keyboardType={"email-address"} 
                    utoCapitalize={"none"} 
                    value={email} 
                    onChangeText={setEmail}
                />
                <InputLog 
                    placeholder="Digite a sua senha"
                    placeholderTextColor={CORES.branco}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <InputLog 
                    placeholder="Confirme a senha"
                    placeholderTextColor={CORES.branco}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <WhiteButton href='./login' text='Cadastrar'/>
            </Animatable.View>
        </View>
    );
};
