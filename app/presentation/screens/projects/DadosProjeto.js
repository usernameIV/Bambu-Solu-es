import React, { useContext } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import ButtonLink from "../../components/button/ButtonLink";
import { DataContext } from "./Context/DataContext";
import StylesClient from "./ProjectsStyles/DadosClienteStyle";
import InputLink from "../../components/input/InputLink";


export default function DadosProjeto() {
  const { projetoData, setProjetoData } = useContext(DataContext);
  return (
    <View style={StylesClient.container}>
      <Stack.Screen options={{ title: "Dados do Projeto" }} />
      <InputLink
        placeholder="Título do projeto" text={"Nome"} placeholderTextColor={CORES.branco} value={projetoData.titulo}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, titulo: text })
        }
      />
<<<<<<< HEAD
 
      <Text style={styles.text}>Endereço</Text>
      <TextInput
        placeholder="Endereço do projeto"
        placeholderTextColor={CORES.branco}
        style={styles.input}
=======
      <InputLink
        placeholder="Endereço do projeto" text={"Endereço"} placeholderTextColor={CORES.branco} value={projetoData.enderecoProjeto}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, enderecoProjeto: text })
        }
>>>>>>> 65ade162e94d8f613afd5a3790834779f1eac290
      />
      <InputLink
        placeholder="Resid. Comerc. Indust." text={"Tipo de construção"} placeholderTextColor={CORES.branco} value={projetoData.tipoConstrucao}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, tipoConstrucao: text })
        }
      />
      <InputLink placeholder="Em m²" text={"Tamanho da construção"} placeholderTextColor={CORES.branco} value={projetoData.tamanhoConstrucao} 
      onChangeText={(text) =>
          setProjetoData({ ...projetoData, tamanhoConstrucao: text })
        }
      />
      <InputLink
        placeholder="Orçamento inicial" text={"Orçamento"} placeholderTextColor={CORES.branco} value={projetoData.orcamento}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, orcamento: text })
        }
      />
      <ButtonLink href="./DadosAmbiente" text="Salvar e continuar" />
    </View>
  );
}

