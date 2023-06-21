import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../../constants/colors';

export default StyleSheet.create({
  safeArea: {flex: 1},
  containerEvolution: {
    backgroundColor: APP_COLORS.backgroundCharacteristics,
    width: '95%',
    borderRadius: 50,
    marginVertical: 12,
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignSelf: 'center',
    shadowColor: '#606060',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    elevation: 4,
  },
  namePokemon: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#464646',
  },
  containerPokemonData: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 4,
    alignItems: 'center',
    paddingVertical: 10,
  },
  pokemon: {
    width: 180,
    height: 180,
  },
  stats: {
    width: '55%',
    shadowColor: '#606060',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    elevation: 4,
    marginHorizontal: 6,
  },
  containerArrow: {
    width: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  arrow: {
    width: 60,
    height: 60,
    transform: [{rotate: '90deg'}],
    alignSelf: 'center',
    shadowColor: '#606060',
    shadowOpacity: 0.5,
    shadowRadius: 1.8,
    shadowOffset: {
      width: 2,
      height: -4,
    },
    elevation: 4,
  },
});
