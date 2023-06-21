import {createSlice} from '@reduxjs/toolkit';
import {fetchPokemonsList} from './services';

export interface IData {
  name: string;
  url: string;
}

interface IInitialState {
  data: IData[];
  error: boolean;
  loading: boolean;
}

const initialState: IInitialState = {
  data: [],
  error: false,
  loading: true,
};

const pokemonsListSlice = createSlice({
  name: 'pokemonsList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPokemonsList.pending, state => {
      state.error = false;
      state.loading = true;
      state.data = [];
    });
    builder.addCase(fetchPokemonsList.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPokemonsList.rejected, state => {
      state.data = [];
      state.loading = false;
      state.error = true;
    });
  },
});

export const pokemonsListReducer = pokemonsListSlice.reducer;
