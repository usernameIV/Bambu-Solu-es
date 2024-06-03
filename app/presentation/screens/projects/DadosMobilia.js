import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Link, Stack } from "expo-router";
import StylesMobilia from './ProjectsStyles/DadosMobiliaStyle';

const furnitureTypes = [
  'Rústica', 'Escandinava', 'Art Deco',  'Boêmio',  'Clássica',
  'Moderno', 'Contemporânea', 'Industrial','Colonial',
];

const roomItems = [
  { name: 'Itens Sala', link: './ItensSala' },
  { name: 'Itens Quarto', link: './ItensQuarto' },
  { name: 'Itens Cozinha', link: './ItensCozinha' },
  { name: 'Itens Antessala', link: './ItensAntessala' },
];

const MultiSelectChips = () => {
  const [selected, setSelected] = useState([]);
  const toggleSelection = (type) => {
    if (selected.includes(type)) {
      setSelected(selected.filter((item) => item !== type));
    } else {
      setSelected([...selected, type]);
    }
  };

  const renderRoomItem = ({ item }) => (
    <Link href={item.link} asChild>
      <TouchableOpacity style={StylesMobilia.roomItem}>
        <Text style={StylesMobilia.roomItemText}>{item.name}</Text>
        <Text style={StylesMobilia.arrow}> {'\>'} </Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={StylesMobilia.container}>
      <Stack.Screen options={{ title: "Dados da Mobilia" }} />
      <Text style={StylesMobilia.header}>• Tipo da mobília</Text>
      <View style={StylesMobilia.chipsContainer}>
        {furnitureTypes.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              StylesMobilia.chip,
              selected.includes(item) && StylesMobilia.selectedChip,
            ]}
            onPress={() => toggleSelection(item)}
          >
            <Text style={[
              StylesMobilia.chipText,
              selected.includes(item) && StylesMobilia.selectedChipText
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={StylesMobilia.header}>• Itens da mobília</Text>
      <FlatList
        data={roomItems}
        renderItem={renderRoomItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={StylesMobilia.roomItemsContainer}
      />
      <Link href='./HomeComProjetos' asChild>
        <TouchableOpacity style={StylesMobilia.button}>
          <Text style={StylesMobilia.buttonText}> Salvar e continuar </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default MultiSelectChips;
