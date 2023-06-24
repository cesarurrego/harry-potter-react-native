import {GetCharactersUseCaseImpl} from '../domain/CharacterUseCase';
import {CharacterRepositoryImpl} from '../data/CharacterRepositoryImpl';

function getCharacters() {
  let charactersRepo = new CharacterRepositoryImpl();
  let charecersService = new GetCharactersUseCaseImpl(charactersRepo);
  return charecersService.execute()
  .then((characters) => {
    return characters;
  })
  .catch((error) => {
    // Handle any errors that occurred during the use case execution
    console.error(error);
  });
}

export default getCharacters;