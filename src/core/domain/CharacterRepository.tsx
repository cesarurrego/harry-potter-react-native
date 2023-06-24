import {Character} from '../data/Character';

export interface CharacterRepository {
  getCharacters(): Promise<Character[]>;
}
