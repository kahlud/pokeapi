import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../../../constants/colors';

export default StyleSheet.create({
  containrDetail: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: APP_COLORS.backgroundCharacteristics,
    borderRadius: 50,
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    marginTop: 10,
  },
  containerTypes: {flexDirection: 'row'},
  containerType: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 40,
    height: 40,
    marginHorizontal: 6,
  },
  typeImage: {
    width: 25,
    height: 25,
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#272727',
  },
});
