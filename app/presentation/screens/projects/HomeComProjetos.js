import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';
import HomeComProjetosStyles from './ProjectsStyles/HomeComProjetosStyle';
import CORES from '../../../constants/cores';
import ButtonInfo from '../../components/button/ButtonInfo';

const ProjectCard = ({ title, startDate, endDate, progress }) => {
  return (
    
      <View style={HomeComProjetosStyles.card}>
        
        <Text style={HomeComProjetosStyles.title}>{title}</Text>
        <View style={HomeComProjetosStyles.progressContainer}>
          <Text style={HomeComProjetosStyles.phaseText}>Fase inicial</Text>
          <Text style={HomeComProjetosStyles.progressText}>{progress}%</Text>
          
        </View>
        <Bar progress={progress / 100} width={null} color={CORES.terciaria} unfilledColor="#CC8879"
          borderWidth={0}
          height={20}
          style={HomeComProjetosStyles.progressBar}
        />
        <Text style={HomeComProjetosStyles.dateText}>Início {startDate}</Text>
        <Text style={HomeComProjetosStyles.dateText}>Previsão de entrega {endDate}</Text>
        <ButtonInfo href={"./TelaSobreProjetos"} ImgSource = {require('../../assets/icons/iconInfo.png')}/>
      </View>
    
  );
};

const ProjectScreen = () => {
  return (
   
      <View style={HomeComProjetosStyles.container }>
        <ProjectCard 
          title="• Casa de Praia"
          startDate="20/06/2023"
          endDate="02/2030"
          progress={3}
        />
        
      </View>
    
  );
};

export default ProjectScreen;
