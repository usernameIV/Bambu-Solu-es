import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Stack } from "expo-router";
import commonStyles from './ItensStyle/CommonStyles';
import ButtonLink from '../../../components/button/ButtonLink';

const roomItems = [
  'Itens Antessala - Chão',
  'Itens Antessala - Parede',
  'Itens Antessala - Teto',
];

const chipItemsChao = [
  'Tapete', 'Sofá', 'Raque', 'Vasos', 'Mesa de Centro', 'Poltrona', 'Puff', 
  'Banco', 'Cadeiras', 'Mesa Lateral', 'Aparador', 'Estante',
];

const chipItemsParede = [
  'Estantes de parede', 'Prateleiras', 'Nichos', 'Suporte para TV', 'Espelhos', 
  'Cabideiros', 'Quadros', 'Relógios', 'Vasos de planta', 'Painéis decorativos',
];

const chipItemsTeto = [
  'Lustres', 'Plafons', 'Arandelas', 'Ventiladores de teto', 'Cortinas', 
  'Persianas', 'Painéis acústicos', 'Sistema de som', 'Luminárias pendentes',
];

const GreenCardScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedChips, setSelectedChips] = useState({
    chao: [],
    parede: [],
    teto: [],
  });

  const handlePress = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleChipPress = (chip, type) => {
    setSelectedChips((prevSelected) => {
      const newSelected = { ...prevSelected };
      if (newSelected[type].includes(chip)) {
        newSelected[type] = newSelected[type].filter((item) => item !== chip);
      } else {
        newSelected[type].push(chip);
      }
      return newSelected;
    });
  };

  const renderRoomItem = (item, index) => {
    let chipItems;
    let chipType;
    
    switch(item) {
      case 'Itens Antessala - Chão':
        chipItems = chipItemsChao;
        chipType = 'chao';
        break;
      case 'Itens Antessala - Parede':
        chipItems = chipItemsParede;
        chipType = 'parede';
        break;
      case 'Itens Antessala - Teto':
        chipItems = chipItemsTeto;
        chipType = 'teto';
        break;
      default:
        chipItems = [];
        chipType = '';
    }

    const renderChips = (chips, type) => {
      return (
        <View style={commonStyles.chipsContainer}>
          {chips.map((chip, chipIndex) => (
            <TouchableOpacity 
              key={chipIndex} 
              style={[
                commonStyles.chip, 
                selectedChips[type].includes(chip) && commonStyles.selectedChip
              ]}
              onPress={() => handleChipPress(chip, type)}
            >
              <Text style={[
                commonStyles.chipText,
                selectedChips[type].includes(chip) && commonStyles.selectedChipText
              ]}>
                {chip}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };

    return (
      <View key={index}>
        <TouchableOpacity onPress={() => handlePress(index)} style={commonStyles.roomItem}>
          <Text style={commonStyles.roomItemText}>{item}</Text>
          <Text style={commonStyles.arrow}>{expandedIndex === index ? '↑' : '↓'}</Text>
        </TouchableOpacity>
        {expandedIndex === index && (
          <View style={commonStyles.dropdownContent}>
            {renderChips(chipItems, chipType)}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={commonStyles.container}>
      <Stack.Screen options={{ title: "Dados da Mobilia - Antessala" }} />
      <View style={commonStyles.card}>
        {roomItems.map((item, index) => renderRoomItem(item, index))}
      </View>

      <ButtonLink href={"../DadosMobilia"} text={"Salvar e continuar"} />
    </ScrollView>
  );
};

export default GreenCardScreen;
