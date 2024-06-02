import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import ButtonLink from "../../components/button/ButtonLink";
import { DataContext } from "./Context/DataContext";
import StylesProject from "./ProjectsStyles/DadosProjetoStyle";
import InputLink from "../../components/input/InputLink";

export default function DadosProjeto() {
  const { projetoData, setProjetoData } = useContext(DataContext);
  return (
    <View style={StylesProject.container}>
      <Stack.Screen options={{ title: "Dados do Projeto" }} />

      <Text style={styles.text}>Título do projeto</Text>
      <TextInput
        placeholder="Título do projeto"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.titulo}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, titulo: text })
        }
      />

      <Text style={styles.text}>Endereço</Text>
      <TextInput
        placeholder="Endereço do projeto"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.enderecoProjeto}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, enderecoProjeto: text })
        }
      />

      <Text style={styles.text}>Tipo de construção</Text>
      <TextInput
        placeholder="Resid. Comerc. Indust."
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.tipoConstrucao}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, tipoConstrucao: text })
        }
      />

      <Text style={styles.text}>Tamanho da construção</Text>
      <TextInput
        placeholder="Em m²"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.tamanhoConstrucao}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, tamanhoConstrucao: text })
        }
      />

      <Text style={styles.text}>Orçamento</Text>
      <TextInput
        placeholder="Orçamento inicial"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.orcamento}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, orcamento: text })
        }
      />

      <ButtonLink href="./DadosAmbiente" text="Salvar e continuar" />
    </View>
  );
}

