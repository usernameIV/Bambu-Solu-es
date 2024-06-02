import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import Checkbox from "expo-checkbox";
import ButtonLink from "../../components/button/ButtonLink";
import stylesAmbiente from "./ProjectsStyles/DadosAmbienteStyle";


export default function AdvancedInfo() {

  return (

    <View style={stylesAmbiente.container}>
      <Stack.Screen options={{ title: "Dados do Ambiente" }} />
      <View>
        <TouchableOpacity style={stylesAmbiente.title}>
          <Text style={stylesAmbiente.titleText}>CARACTERÍSTICAS DO PROJETO</Text>
        </TouchableOpacity>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Contém restrições?</Text>
          <Checkbox
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Sustentabilidade?</Text>
          <Checkbox
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Acessibilidade?</Text>
          <Checkbox
            style={stylesAmbiente.checkbox}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={stylesAmbiente.title}>
          <Text style={stylesAmbiente.titleText}>CARACTERÍSTICAS DO AMBIENTE</Text>
        </TouchableOpacity>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Ventilação natural?</Text>
          <Checkbox
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Isolamento acústico?</Text>
          <Checkbox
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Eficiência energética?</Text>
          <Checkbox
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Iluminação natural?</Text>
          <Checkbox
            style={stylesAmbiente.checkbox} 
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Ventilação?</Text>
          <Checkbox
            style={stylesAmbiente.checkbox}
          />
        </View>
      </View>

      <ButtonLink href="./DadosMobilia" text={"Salvar e continuar"} />
    </View>
  );
}
