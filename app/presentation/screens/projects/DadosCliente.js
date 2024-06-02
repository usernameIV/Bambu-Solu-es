import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link, Stack } from 'expo-router';
import CORES from '../../../constants/cores' ;


export default function DadosCliente() {
 
  return (  
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Dados do Cliente" }} />
      
      <Text style={styles.text}>Nome</Text>
      <TextInput
        placeholder="Nome do cliente"
        placeholderTextColor={CORES.branco}
        style={styles.input}
      />
 
      <Text style={styles.text}>Endereço</Text>
      <TextInput
        placeholder="Endereço do cliente"
        placeholderTextColor={CORES.branco}
        style={styles.input}
      />
      
      <Text style={styles.text}>Telefone</Text>
      <TextInput
        placeholder="Telefone do cliente"
        placeholderTextColor={CORES.branco}
        style={[styles.input]}
        maxLength={11}
        keyboardType='phone-pad'
      />
 
      <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="Email do cliente"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        keyboardType='email-address'
      />

      <Link style={styles.button} href='./DadosProjeto' asChild>
          <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}
          >
              <Text style={styles.buttonText}> Salvar e continuar </Text>
          </TouchableOpacity>
      </Link>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:CORES.branco,
},
  input:{
    borderRadius: 10,
    backgroundColor: CORES.principal,
    color: CORES.branco,
    height: 40,
    marginTop: 5,
    marginBottom:12,
    margin: 'auto',
    paddingLeft: 10,
    fontSize: 16,
    width: '90%',
}, 
 cabecalho:{
  position: 'relative',
   backgroundColor: CORES.secundaria,
   flexDirection:'row',
   alig:'center',
   height: '10%',
},
imagem: {
  alignSelf: 'center',
  justifyContent: 'center',
  marginTop: '7%',
  width: 60, 
  height: 80, 
  resizeMode: 'contain',
},
button: {
  backgroundColor: CORES.secundaria,
  width: '90%',
  borderRadius: 10,
  height: 50,
  margin: 'auto',
  marginTop: '60%',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 6,
},
buttonText: {
  color: CORES.branco,
  fontWeight: 'bold',
},
text: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%',
},
inputError: {
  borderColor: 'red',
}

});