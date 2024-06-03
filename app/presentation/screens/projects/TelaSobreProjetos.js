import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import StylesProjeto from "./ProjectsStyles/TelaSobreProjetoStyle";

const ProjetoDetalhesScreen = () => {
  return (
    <View style={StylesProjeto.container}>
      <Text style={StylesProjeto.header}>Projeto Casa de Praia</Text>
      
      <View style={StylesProjeto.card}>
        <View style={StylesProjeto.primaryTopic}>
          <Text style={StylesProjeto.primary}>• Situação atual</Text>
          <Text style={StylesProjeto.subTopic}>Etapa anterior</Text>
          <Text style={StylesProjeto.description}>- Reunião de briefing</Text>
          <Text style={StylesProjeto.subTopic}>Etapa atual</Text>
          <Text style={StylesProjeto.description}>- Definição de RT</Text>
          <Text style={StylesProjeto.subTopic}>Próxima etapa</Text>
          <Text style={StylesProjeto.description}>- Reunião com M.O</Text>
        </View>
        
        <View style={StylesProjeto.secondaryTopic}>
          <Text style={StylesProjeto.secondary}>• Sobre a obra</Text>
          <Text style={StylesProjeto.subTopic}>Endereço</Text>
          <Text style={StylesProjeto.description}>- Av. Estefânia Carneiro. 171 PE - Carpina - Centro</Text>
          <Text style={StylesProjeto.subTopic}>Tamanho</Text>
          <Text style={StylesProjeto.description}>- 90m²</Text>
          <Text style={StylesProjeto.subTopic}>Tipo de obra</Text>
          <Text style={StylesProjeto.description}>- Residencial</Text>
          <Text style={StylesProjeto.subTopic}>Orçamento atual</Text>
          <Text style={StylesProjeto.description}>- R$9.812,60</Text>
        </View>

        <View style={StylesProjeto.innerButtonsContainer}>
          <TouchableOpacity style={StylesProjeto.innerButton}>
            <Link href='./CaracProjetos'>
              <Text style={StylesProjeto.innerButtonText}>Características do projeto</Text>
            </Link>
          </TouchableOpacity>
          
          <TouchableOpacity style={StylesProjeto.innerButton}>
            <Text style={StylesProjeto.innerButtonText}>Características do ambiente</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={StylesProjeto.status}>Status: em andamento...                   Progresso: 30% {'\n'} </Text> 
        <Text style={StylesProjeto.status}>Início: 20/06/2023              Previsão de entrega: 05/2024</Text>
      </View>

      <View style={StylesProjeto.outerButtonsContainer}>
        <TouchableOpacity style={StylesProjeto.createTaskButton}>
          <Text style={StylesProjeto.outerButtonText}>Criar nova task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StylesProjeto.deleteTaskButton}>
          <Text style={StylesProjeto.outerButtonText}>Deletar task</Text>
        </TouchableOpacity>
      </View>

      <View style={StylesProjeto.addButtonContainer}>
        <TouchableOpacity style={StylesProjeto.addButton}>
          <Text style={StylesProjeto.addButtonText}>Adicionar documento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: CORES.branco,
  },
  header: {
    display: 'flex',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    bottom: 10,
  },
  card: {
    backgroundColor: CORES.principal,
    width: '105%',
    height: '80%',
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  primary: {
    color: CORES.branco,
    fontSize: 24,
  },
  secondary: {
    color: CORES.branco,
    fontSize: 24,
  },
  primaryTopic: {
    color: CORES.branco,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    bottom: 20,
  },
  secondaryTopic: {
    color: CORES.branco,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    bottom: 20,
  },
  subTopic: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    color: CORES.branco,
    fontSize: 16,
    marginBottom: 7,
  },
  status: {
    color: CORES.branco,
    fontSize: 14,
    bottom: 10,
  },
  innerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerButton: {
    backgroundColor: CORES.branco,
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    bottom: 40,
  },
  innerButtonText: {
    color: CORES.secundaria,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  outerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15,
  },
  createTaskButton: {
    backgroundColor: CORES.secundaria,
    padding: 10,
    borderRadius: 16,
    width: '48%',
    alignItems: 'center',
    height: 45,
  },
  deleteTaskButton: {
    backgroundColor: CORES.terciaria,
    padding: 10,
    borderRadius: 16,
    width: '48%',
    alignItems: 'center',
    height: 45,
  },
  outerButtonText: {
    color: CORES.branco,
    fontWeight: 'bold',
  },
  addButtonContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: CORES.branco,
    width: '50%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: CORES.secundaria,
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: CORES.secundaria,
    fontWeight: 'bold',
  },
});
 
=======
>>>>>>> 65ade162e94d8f613afd5a3790834779f1eac290
export default ProjetoDetalhesScreen;
