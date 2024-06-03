import React from 'react';
import { Image, View, Text, StyleSheet, TextInput} from 'react-native';
import CORES from '../../../constants/cores';
import ButtonLink from '../../components/button/ButtonLink';
import * as Animatable from 'react-native-animatable';
import StylesEsqueciSenha from './AuthStyles/EsqueciSenhaStyle';
import WhiteButton from '../../components/button/ButtonWhite';

export default function EsqueciSenha() {

    return(

        <View style={StylesEsqueciSenha.container}>
            <View style={StylesEsqueciSenha.circleContainer}>
                <View style={StylesEsqueciSenha.outerCircle}>
                    <View style={StylesEsqueciSenha.innerCircle}>
                        <Image
                            source={require('../../assets/icons/iconLogo.png')}
                            style={StylesEsqueciSenha.image}
                            resizeMode='contain'
                        />
                    </View>
                </View>
            </View>

            <Text style={StylesEsqueciSenha.mainText}>Esqueceu sua senha?</Text>

            <Text style={StylesEsqueciSenha.infoText}>Insira seu e-mail para{'\n'}receber uma nova senha...</Text>

            <Animatable.View animation="fadeInUp" style={StylesEsqueciSenha.containerForm}>
                <TextInput 
                    placeholder="E-mail" 
                    placeholderTextColor={CORES.branco}
                    style={StylesEsqueciSenha.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <WhiteButton href={"./TelaCodigo"} text={"Receber Código"}/>

            </Animatable.View>
        </View>
    );
};


