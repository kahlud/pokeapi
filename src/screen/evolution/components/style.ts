import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  touchableEvolution: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '98%',
    justifyContent: 'center',
    borderRadius: 25,
    paddingBottom: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#BABABA',
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {width: 1, height: 4},
    elevation: 2,
  },
  containerPokemon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  circle: {
    backgroundColor: '#ffffffa3',
    width: 90,
    height: 90,
    borderRadius: 100,
    position: 'absolute',
  },
  image: {width: 110, height: 110},
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    color: '#464646',
  },
  arrow: {width: 25, height: 25, margin: 2},
});
