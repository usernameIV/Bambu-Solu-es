import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import ButtonLink from "../../components/button/ButtonLink";
import StylesProject from "./ProjectsStyles/DadosProjetoStyle";
import InputLink from "../../components/input/InputLink";
export default function DadosProjeto() {
  return (
    <View style={StylesProject.container}>
      <Stack.Screen options={{ title: "Dados do Projeto" }} />
      <Text style={StylesProject.text}>Título do projeto</Text>
          <Stack.Screen options={{ title: "Dados do Cliente" }} />
          <InputLink placeholder={"Título do projeto"} text={"Título do projeto"} />
          <InputLink placeholder={"Endereço do projeto"} text={"Endereço"} />
          <InputLink placeholder={"Resid. Comerc. Indust."} text={"Tipo de construção"}/>
          <InputLink placeholder={"Em m²"} text={"Tamanho da construção"}/>
          <InputLink placeholder={"Orçamento inicial"} text={"Orçamento"}/>
          <ButtonLink href="./DadosAmbiente" text="Salvar e continuar" />
    </View>
  );
}

