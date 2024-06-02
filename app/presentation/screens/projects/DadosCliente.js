import React , {useContext} from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import ButtonLink from "../../components/button/ButtonLink";
import StylesClient from "./ProjectsStyles/DadosClienteStyle";
import InputLink from "../../components/input/InputLink";
import { DataContext } from "./Context/DataContext";

export default function DadosCliente() {
  const { clienteData, setClienteData } = useContext(DataContext);

  return (
    <View style={StylesClient.container}>
      <Stack.Screen options={{ title: "Dados do Cliente" }} />
      <InputLink
        placeholder={"Nome do cliente"}
        text={"Nome"}
        value={clienteData.nome}
        onChangeText={(text) => setClienteData({ ...clienteData, nome: text })}
      />

      <InputLink
        placeholder={"Endereço do cliente"}
        text={"Endereço"}
        value={clienteData.endereco}
        onChangeText={(text) =>
          setClienteData({ ...clienteData, endereco: text })
        }
      />

      <InputLink
        placeholder={"Telefone do cliente"}
        text={"Telefone"}
        keyboardType="phone-pad"
        maxLength={11}
        value={clienteData.telefone}
        onChangeText={(text) => setClienteData({ ...clienteData, telefone: text })}
      />
      <InputLink
        placeholder={"Email do cliente"}
        text={"Email"}
        keyboardType="email-address"
        value={clienteData.email}
        onChangeText={(text) => setClienteData({ ...clienteData, email: text })}
      />
      <ButtonLink href="./DadosProjeto" text="Salvar e continuar" />
    </View>
  );
}
