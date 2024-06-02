import React from 'react';
import { Image, View, Text, StyleSheet, TextInput} from 'react-native';
import CORES from '../../../constants/cores';
import ButtonLink from '../../components/button/ButtonLink';
import * as Animatable from 'react-native-animatable';

export default function EsqueciSenha() {

    return(

        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <View style={styles.outerCircle}>
                    <View style={styles.innerCircle}>
                        <Image
                            source={require('../../assets/icons/iconLogo.png')}
                            style={styles.image}
                            resizeMode='contain'
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.mainText}>Esqueceu sua senha?</Text>

            <Text style={styles.infoText}>Insira seu e-mail para{'\n'}receber uma nova senha...</Text>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput 
                    placeholder="E-mail" 
                    placeholderTextColor={CORES.branco}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <ButtonLink href={"./TelaCodigo"} text={"Receber Código"}/>

            </Animatable.View>
        </View>
    );
};


