import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import Checkbox from "expo-checkbox";
import ButtonLink from "../../components/button/ButtonLink";
import { DataContext } from "./Context/DataContext";
import stylesAmbiente from "./ProjectsStyles/DadosAmbienteStyle";


export default function AdvancedInfo() {
  const { checkboxes, setCheckbox, projetoData, setProjetoData } =
    useContext(DataContext);

  const saveState = () => {
    setProjetoData({
      ...projetoData,
      ...checkboxes,
    });
  };
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
            value={checkboxes.restricoes}
            onValueChange={(value) => setCheckbox("restricoes", value)}
            color={checkboxes.restricoes ? CORES.secundaria : undefined}
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Sustentabilidade?</Text>
          <Checkbox
            value={checkboxes.sustentabilidade}
            onValueChange={(value) => setCheckbox("sustentabilidade", value)}
            color={checkboxes.sustentabilidade ? CORES.secundaria : undefined}
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Acessibilidade?</Text>
          <Checkbox
            value={checkboxes.acessibilidade}
            onValueChange={(value) => setCheckbox("acessibilidade", value)}
            color={checkboxes.acessibilidade ? CORES.secundaria : undefined}
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
            value={checkboxes.ventilacaoNatural}
            onValueChange={(value) => setCheckbox("ventilacaoNatural", value)}
            color={checkboxes.ventilacaoNatural ? CORES.secundaria : undefined}
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Isolamento acústico?</Text>
          <Checkbox
            value={checkboxes.isolamentoAcustico}
            onValueChange={(value) => setCheckbox("isolamentoAcustico", value)}
            color={checkboxes.isolamentoAcustico ? CORES.secundaria : undefined}
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Eficiência energética?</Text>
          <Checkbox
            value={checkboxes.eficienciaEnergetica}
            onValueChange={(value) =>
              setCheckbox("eficienciaEnergetica", value)
            }
            color={
              checkboxes.eficienciaEnergetica ? CORES.secundaria : undefined
            }
            style={stylesAmbiente.checkbox}
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Iluminação natural?</Text>
          <Checkbox
            value={checkboxes.iluminacaoNatural}
            onValueChange={(value) => setCheckbox("iluminacaoNatural", value)}
            color={checkboxes.iluminacaoNatural ? CORES.secundaria : undefined}
            style={stylesAmbiente.checkbox} 
          />
        </View>
        <View style={stylesAmbiente.row}>
          <Text style={stylesAmbiente.texto}>Ventilação?</Text>
          <Checkbox
            value={checkboxes.ventilacao}
            onValueChange={(value) => setCheckbox("ventilacao", value)}
            color={checkboxes.ventilacao ? CORES.secundaria : undefined}
            style={stylesAmbiente.checkbox}
          />
        </View>
      </View>

      <ButtonLink href="./DadosMobilia" text={"Salvar e continuar"} 
      onPress={saveState}/>
    </View>
  );
}
