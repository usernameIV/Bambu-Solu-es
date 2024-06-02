import React from 'react';
import {View } from 'react-native';
import { Stack } from 'expo-router';
import ButtonLink from '../../components/button/ButtonLink';
import StylesClient from './ProjectsStyles.js/DadosClienteStyle';
import InputLink from '../../components/input/InputLink';
import CORES from '../../../constants/cores';
export default function DadosCliente() {
  return (
      <View style={StylesClient.container}>
          <Stack.Screen options={{ title: "Dados do Cliente" }} />
          <InputLink placeholder={"Nome do cliente"} text={"Nome"} />
          <InputLink placeholder={"Endereço do cliente"} text={"Endereço"} />
          <InputLink placeholder={"Telefone do cliente"} text={"Telefone"} keyboardType='phone-pad' maxLength={11} />
          <InputLink placeholder={"Email do cliente"} text={"Email"} keyboardType='email-address' />
          <ButtonLink href="./DadosProjeto" text="Salvar e continuar" />
      </View>
  );
}