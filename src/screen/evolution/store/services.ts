import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosRequest} from '../../../constants/baseURL';
import {IDataEvolution} from './actions';

export interface PokemonEvolution {
  count: number;
  next: string;
  previous: null;
  results: IDataEvolution[];
}

export const fetchPokemonsEvolution = createAsyncThunk<IDataEvolution[]>(
  'pokemonEvolution',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await AxiosRequest.get<PokemonEvolution>(
        '/evolution-chain?limit=170',
      );

      return data.results;
    } catch (error) {
      return rejectWithValue('Error');
    }
  },
);
