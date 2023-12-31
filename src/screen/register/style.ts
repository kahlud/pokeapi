import {StyleSheet} from 'react-native/';
import {APP_COLORS} from '../../constants/colors';

export default StyleSheet.create({
  safeArea: {backgroundColor: APP_COLORS.background, flex: 1},
  container: {
    backgroundColor: APP_COLORS.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    zIndex: 99,
    marginBottom: -40,
    marginTop: -50,
    shadowColor: '#242424',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 6,
  },
  card: {
    backgroundColor: '#ba0201',
    width: '95%',
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
    paddingTop: 40,
    paddingBottom: 30,
  },
  containerBotton: {
    width: '100%',
  },
});
