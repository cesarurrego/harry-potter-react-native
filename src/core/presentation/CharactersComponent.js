import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import {GetCharactersUseCaseImpl} from '../domain/CharacterUseCase';
import {CharacterRepositoryImpl} from '../data/CharacterRepositoryImpl';

const BookComponent = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const characterRepository = new CharacterRepositoryImpl();
    const getCharactersUseCase = new GetCharactersUseCaseImpl(characterRepository);

    getCharactersUseCase
      .execute()
      .then((characterList) => {
        setCharacters(characterList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderCharacterItem = ({ item }) => (
    <View style={styles.characterItem}>
      <Image 
        style={styles.tinyLogo}
        source={{    
          uri: item.image == '' ? 'https://reactnative.dev/img/tiny_logo.png' : item.image,
        }}/>
        <View style={styles.detailItem}>
          <Text style={styles.characterName}>{item.name}</Text>
          <Text>{item.name}</Text>
        </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  characterItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  detailItem: {
    marginBottom: 16,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default BookComponent;