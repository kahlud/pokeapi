import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../constants/colors';

export default StyleSheet.create({
  safeArea: {backgroundColor: APP_COLORS.background},
  container: {
    backgroundColor: APP_COLORS.background,
    width: '100%',
    height: '100%',
  },
  loading: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 6,
  },
  title: {fontSize: 28, fontWeight: '800', color: 'black'},
  flatList: {justifyContent: 'space-evenly'},
});
