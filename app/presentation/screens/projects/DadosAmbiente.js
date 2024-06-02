import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import Checkbox from "expo-checkbox";
import ButtonLink from "../../components/button/ButtonLink";
import { DataContext } from "./Context/DataContext";

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

    <View style={styles.container}>
      <Stack.Screen options={{ title: "Dados do Ambiente" }} />
      <View>
        <TouchableOpacity style={styles.title}>
          <Text style={styles.titleText}>CARACTERÍSTICAS DO PROJETO</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.texto}>Contém restrições?</Text>
          <Checkbox
            style={styles.checkbox}
            value={checkboxes.restricoes}
            onValueChange={(value) => setCheckbox("restricoes", value)}
            color={checkboxes.restricoes ? CORES.secundaria : undefined}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.texto}>Sustentabilidade?</Text>
          <Checkbox
            style={styles.checkbox}
            value={checkboxes.sustentabilidade}
            onValueChange={(value) => setCheckbox("sustentabilidade", value)}
            color={checkboxes.sustentabilidade ? CORES.secundaria : undefined}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.texto}>Acessibilidade?</Text>
          <Checkbox
            style={styles.checkbox}
            value={checkboxes.acessibilidade}
            onValueChange={(value) => setCheckbox("acessibilidade", value)}
            color={checkboxes.acessibilidade ? CORES.secundaria : undefined}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.title}>
          <Text style={styles.titleText}>CARACTERÍSTICAS DO AMBIENTE</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.texto}>Ventilação natural?</Text>
          <Checkbox
            style={styles.checkbox}
            value={checkboxes.ventilacaoNatural}
            onValueChange={(value) => setCheckbox("ventilacaoNatural", value)}
            color={checkboxes.ventilacaoNatural ? CORES.secundaria : undefined}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.texto}>Isolamento acústico?</Text>
          <Checkbox
            style={styles.checkbox}
            value={checkboxes.isolamentoAcustico}
            onValueChange={(value) => setCheckbox("isolamentoAcustico", value)}
            color={checkboxes.isolamentoAcustico ? CORES.secundaria : undefined}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.texto}>Eficiência energética?</Text>
          <Checkbox
            style={styles.checkbox}
            value={checkboxes.eficienciaEnergetica}
            onValueChange={(value) =>
              setCheckbox("eficienciaEnergetica", value)
            }
            color={
              checkboxes.eficienciaEnergetica ? CORES.secundaria : undefined
            }
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.texto}>Iluminação natural?</Text>
          <Checkbox
            style={styles.checkbox}
            value={checkboxes.iluminacaoNatural}
            onValueChange={(value) => setCheckbox("iluminacaoNatural", value)}
            color={checkboxes.iluminacaoNatural ? CORES.secundaria : undefined}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.texto}>Ventilação?</Text>
          <Checkbox
            style={styles.checkbox}
            value={checkboxes.ventilacao}
            onValueChange={(value) => setCheckbox("ventilacao", value)}
            color={checkboxes.ventilacao ? CORES.secundaria : undefined}
          />
        </View>
      </View>

      <ButtonLink href="./DadosMobilia" text={"Salvar e continuar"} 
      onPress={saveState}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
    paddingHorizontal: 20,
    top: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  texto: {
    fontSize: 18,
    color: CORES.secundaria,
    flex: 1,
  },
  checkbox: {
    marginRight: 10,
  },
  title: {
    backgroundColor: CORES.principal,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  titleText: {
    color: CORES.branco,
    fontSize: 20,
    textAlign: "center",
  },
});
