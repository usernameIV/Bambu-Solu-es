import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import ButtonLink from "../../components/button/ButtonLink";
import { DataContext } from "./Context/DataContext";
import StylesProjeto from "./ProjectsStyles/TelaSobreProjetoStyle";
import InputLink from "../../components/input/InputLink";


export default function DadosProjeto() {
  const { projetoData, setProjetoData } = useContext(DataContext);
  return (
    <View style={StylesProjeto.container}>
      <Stack.Screen options={{ title: "Dados do Projeto" }} />
      <InputLink
        placeholder="Título do projeto"
        text={"Nome"}
        placeholderTextColor={CORES.branco}
        value={projetoData.titulo}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, titulo: text })
        }
      />
      <InputLink
        placeholder="Endereço do projeto"
        text={"Endereço"}
        placeholderTextColor={CORES.branco}
        value={projetoData.enderecoProjeto}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, enderecoProjeto: text })
        }
      />
      <InputLink
        placeholder="Resid. Comerc. Indust."
        text={"Tipo de construção"}
        placeholderTextColor={CORES.branco}
        value={projetoData.tipoConstrucao}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, tipoConstrucao: text })
        }
      />
      <InputLink
        placeholder="Em m²"
        text={"Tamanho da construção"}
        placeholderTextColor={CORES.branco}
        value={projetoData.tamanhoConstrucao}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, tamanhoConstrucao: text })
        }
      />

      
      <InputLink
        placeholder="Orçamento inicial"
        text={"Orçamento"}
        placeholderTextColor={CORES.branco}
        value={projetoData.orcamento}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, orcamento: text })
        }
      />

      <ButtonLink href="./DadosAmbiente" text="Salvar e continuar" />
    </View>
  );
}

