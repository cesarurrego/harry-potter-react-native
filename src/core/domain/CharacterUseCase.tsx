import {Character} from '../data/Character';
import {CharacterRepository} from './CharacterRepository';

export interface GetCharactersUseCase {
  execute(): Promise<Character[]>;
}

export class GetCharactersUseCaseImpl implements GetCharactersUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(): Promise<Character[]> {
    try {
      const characters = await this.characterRepository.getCharacters();
      return characters;
    } catch (error) {
      throw error;
    }
  }
}