import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosRequest} from '../../../constants/baseURL';
import {IData} from './actions';

export interface PokemonsList {
  count: number;
  next: string;
  previous: null;
  results: IData[];
}

export const fetchPokemonsList = createAsyncThunk<IData[]>(
  'pokemonsList',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await AxiosRequest.get<PokemonsList>('/pokemon?limit=170');
      return data.results;
    } catch (__) {
      return rejectWithValue('fatal error');
    }
  },
);
