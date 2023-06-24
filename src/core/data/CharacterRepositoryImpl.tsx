
import {Character, Convert} from './Character';
import { CharacterRepository } from '../domain/CharacterRepository';

export class CharacterRepositoryImpl implements CharacterRepository {
  async getCharacters(): Promise<Character[]> {
    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      const json = await response.json();
      const characters: Character[] = json;
      return characters;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}