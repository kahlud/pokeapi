import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {PokemonDetail} from '../interfaces/pokemonDetail';

export type Navigation<
  P extends ParamListBase = ParamListBase,
  R extends keyof P = keyof ParamListBase,
> = NativeStackScreenProps<P, R>;

export type RootStackParamList = {
  DetailPokemon: {
    pokemon: PokemonDetail;
    isFavorite: boolean;
    setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  };
  DetailEvolution: {evolution: []};
  Login: undefined;
  Tab: undefined;
  Register: undefined;
  PokemonHome: undefined;
};
