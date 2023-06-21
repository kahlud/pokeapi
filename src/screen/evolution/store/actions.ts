import {createSlice} from '@reduxjs/toolkit';
import {fetchPokemonsEvolution} from './services';

export interface IDataEvolution {
  url: string;
}

interface IInitialState {
  data: IDataEvolution[];
  error: boolean;
  loading: boolean;
}

const initialState: IInitialState = {
  data: [],
  error: false,
  loading: true,
};

const pokemonEvolutionSlice = createSlice({
  name: 'pokemonEvolution',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPokemonsEvolution.pending, state => {
      state.error = false;
      state.loading = true;
      state.data = [];
    });
    builder.addCase(fetchPokemonsEvolution.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPokemonsEvolution.rejected, state => {
      state.error = true;
      state.loading = false;
      state.data = [];
    });
  },
});

export const pokemonsEvolutionReducer = pokemonEvolutionSlice.reducer;
