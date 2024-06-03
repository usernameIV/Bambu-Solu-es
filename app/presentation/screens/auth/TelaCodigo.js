import React from 'react';
import {Image, View, Text} from 'react-native';
import CORES from '../../../constants/cores';
import * as Animatable from 'react-native-animatable';
import Button2Styles from '../../components/button/ButtonWhite';
import InputLink from '../../components/input/InputLink';
import StylesTelaCodigo from './AuthStyles/TelaCodigoStyle';

export default function TelaCodigo() {

    return (
        <View style={StylesTelaCodigo.container}>
            <View style={StylesTelaCodigo.circleContainer}>
                <View style={StylesTelaCodigo.outerCircle}>
                    <View style={StylesTelaCodigo.innerCircle}>
                        <Image
                            source={require('../../assets/icons/iconLogo.png')}
                            style={StylesTelaCodigo.image}
                            resizeMode='contain'
                        />
                    </View>
                </View>
            </View>

            <Text style={StylesTelaCodigo.mainText}>INSIRA O CÓDIGO </Text>

            <Text style={StylesTelaCodigo.infoText}>Insira o código{'\n'}recebido no e-mail...</Text>

            <Animatable.View animation="fadeInUp" style={StylesTelaCodigo.containerForm}>
                
                <InputLink 
                placeholder={"Código Recebido"} 
                placeholderTextColor={CORES.branco} 
                style={StylesTelaCodigo.input}
                keyboardType="email-address" 
                autoCapitalize="none"/>
        
                <Button2Styles href={"./login"} text={"Enviar Código"}/>


            </Animatable.View>

        </View>
    );
};