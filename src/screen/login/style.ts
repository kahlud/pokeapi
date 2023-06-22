import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../constants/colors';

export default StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: APP_COLORS.background},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ba0201',
    width: '90%',
    paddingVertical: 35,
    borderRadius: 25,
    shadowColor: '#a2a2a2',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  containerInput: {width: '85%', marginTop: 8},
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 5,
    marginVertical: 6,
  },
  image: {
    zIndex: 99,
    marginTop: -30,
    shadowColor: '#242424',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 6,
  },
  textInput: {
    backgroundColor: '#d4d4d4a3',
    borderRadius: 12,
    padding: 10,
    fontSize: 18,
    shadowColor: '#242424',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 18,
    elevation: 13,
    marginBottom: 8,
  },
  containerBotton: {
    width: '85%',
    flexDirection: 'row',
    marginTop: 26,
    justifyContent: 'space-between',
  },
  error: {color: 'white', position: 'absolute'},
  errorUser: {top: 120},
  errorPassword: {top: 210},
});
