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
<<<<<<< HEAD
 
const styles = StyleSheet.create({
    
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
button: {
    backgroundColor: CORES.branco,
    width: '90%',
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
=======

>>>>>>> 65ade162e94d8f613afd5a3790834779f1eac290

