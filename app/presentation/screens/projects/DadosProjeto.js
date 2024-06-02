import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import ButtonLink from "../../components/button/ButtonLink";

export default function DadosProjeto() {

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Dados do Projeto" }} />

      <Text style={styles.text}>Título do projeto</Text>
      <TextInput
        placeholder="Título do projeto"
        placeholderTextColor={CORES.branco}
        style={styles.input}
      />
 
      <Text style={styles.text}>Endereço</Text>
      <TextInput
        placeholder="Endereço do projeto"
        placeholderTextColor={CORES.branco}
        style={styles.input}
      />

      <Text style={styles.text}>Tipo de construção</Text>
      <TextInput
        placeholder="Resid. Comerc. Indust."
        placeholderTextColor={CORES.branco}
        style={styles.input}
      />

      <Text style={styles.text}>Tamanho da construção</Text>
      <TextInput
        placeholder="Em m²"
        placeholderTextColor={CORES.branco}
        style={styles.input}
      />

      <Text style={styles.text}>Orçamento</Text>
      <TextInput
        placeholder="Orçamento inicial"
        placeholderTextColor={CORES.branco}
        style={styles.input}
      />

      <ButtonLink href="./DadosAmbiente" text="Salvar e continuar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
  },
  input: {
    borderRadius: 10,
    backgroundColor: CORES.principal,
    color: CORES.branco,
    height: 40,
    marginTop: 5,
    margin: "auto",
    marginBottom: 12,
    paddingLeft: 10,
    fontSize: 16,
    width: "90%",
  },
  text: {
    fontWeight: "bold",
    color: CORES.cinza,
    marginTop: 5,
    marginLeft: "2%",
  },
});
