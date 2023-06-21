import {combineReducers} from 'redux';
import {pokemonsListReducer} from '../../screen/pokemonList/store/actions';
import {pokemonsEvolutionReducer} from '../../screen/evolution/store/actions';
import {authReducer} from '../store/auth/authSlice';

const reducer = combineReducers({
  auth: authReducer,
  pokemonsList: pokemonsListReducer,
  pokemonEvolution: pokemonsEvolutionReducer,
});

export default reducer;
