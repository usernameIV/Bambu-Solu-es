import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import CORES from '../../../constants/cores';
import * as Animatable from 'react-native-animatable';


export default function Login() {
    return (
        <View style={styles.container}>
            <Animatable.Image 
                animation="fadeInLeft" 
                delay={500} 
                style={styles.containerImage} 
                source={require('../../assets/icons/logo.png')}
                resizeMode='contain'
            />

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput 
                    placeholder="E-mail" 
                    placeholderTextColor={CORES.branco}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput 
                    placeholder="Senha" 
                    placeholderTextColor={CORES.branco} 
                    style={styles.input} 
                    secureTextEntry
                />

                <Link href={'../projects/projetosHome'} asChild>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8}> 
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity> 
                </Link>

                <Link href='./EsqueciSenha' asChild>
                    <TouchableOpacity style={styles.buttonEsqueceu} activeOpacity={0.8}> 
                        <Text style={styles.esqueceuText}>Esqueceu a{'\n'}senha?</Text>
                    </TouchableOpacity>
                </Link>

                <Link href='./Register' asChild>
                    <TouchableOpacity style={styles.buttonRegister} activeOpacity={0.8}> 
                        <Text style={styles.registerText}>Registrar-se{'\n'}no bambu</Text>
                    </TouchableOpacity> 
                </Link>
            </Animatable.View>
        </View>
    );
};
 
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