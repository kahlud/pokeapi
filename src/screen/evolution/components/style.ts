import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  touchableEvolution: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '98%',
    justifyContent: 'center',
    borderRadius: 25,
    paddingBottom: 14,
    paddingTop: 4,
    paddingHorizontal: 8,
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
  },
  circle: {
    backgroundColor: '#ffffffa3',
    width: 80,
    height: 80,
    borderRadius: 100,
    position: 'absolute',
  },
  image: {width: 100, height: 100},
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: '#464646',
  },
  arrow: {width: 20, height: 20, marginLeft: 2},
});
