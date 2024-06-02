import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import StylesProjeto from "./ProjectsStyles/ProjetoStyle";

const ProjetoDetalhesScreen = () => {
  return (
    <View style={StylesProjeto.container}>
      <Text style={StylesProjeto.header}>- Projeto Casa de Praia</Text>

      <View style={StylesProjeto.card}>
        <View style={StylesProjeto.primaryTopic}>
          <Text style={StylesProjeto.primary}>- Situação atual</Text>
          <Text style={StylesProjeto.subTopic}>Etapa anterior</Text>
          <Text style={StylesProjeto.description}>- Reunião de briefing</Text>
          <Text style={StylesProjeto.subTopic}>Etapa atual</Text>
          <Text style={StylesProjeto.description}>- Definição de RT</Text>
          <Text style={StylesProjeto.subTopic}>Próxima etapa</Text>
          <Text style={StylesProjeto.description}>- Reunião com M.O</Text>
        </View>

        <View style={StylesProjeto.secondaryTopic}>
          <Text style={StylesProjeto.secondary}>- Sobre a obra</Text>
          <Text style={StylesProjeto.subTopic}>Endereço</Text>
          <Text style={StylesProjeto.description}>
            - Av. Estefânia Carneiro. 171{"\n"}PE - Carpina - Centro
          </Text>
          <Text style={StylesProjeto.subTopic}>Tamanho</Text>
          <Text style={StylesProjeto.description}>- 90m²</Text>
          <Text style={StylesProjeto.subTopic}>Tipo de obra</Text>
          <Text style={StylesProjeto.description}>- Residencial</Text>
          <Text style={StylesProjeto.subTopic}>Orçamento atual</Text>
          <Text style={StylesProjeto.description9}>- R$9.812,60</Text>
        </View>

        <View style={StylesProjeto.innerButtonsContainer}>
          <TouchableOpacity style={StylesProjeto.innerButton}>
            <Text style={StylesProjeto.innerButtonText}>
              Características do projeto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={StylesProjeto.innerButton}>
            <Text style={StylesProjeto.innerButtonText}>
              Características do ambiente
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={StylesProjeto.status}>
          Status: em andamento... Progresso: 30% {"\n"}{" "}
        </Text>
        <Text style={StylesProjeto.status}>
          *Início: 20/06/2023 Previsão de entrega: 05/2024
        </Text>
      </View>

      <View style={StylesProjeto.outerButtonsContainer}>
        <TouchableOpacity style={StylesProjeto.createTaskButton}>
          <Text style={StylesProjeto.outerButtonText}>Criar nova task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StylesProjeto.deleteTaskButton}>
          <Text style={StylesProjeto.outerButtonText}>Deletar task</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={StylesProjeto.addButton}>
        <Text style={StylesProjeto.addButtonText}>Adicionar documento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProjetoDetalhesScreen;
