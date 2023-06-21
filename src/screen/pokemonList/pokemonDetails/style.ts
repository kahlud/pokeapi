import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../../constants/colors';

export default StyleSheet.create({
  safeArea: {flex: 1},
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -8,
  },
  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  name: {fontSize: 35, fontWeight: '700', color: '#272727'},

  image: {
    width: 280,
    height: 280,
    marginTop: -5,
  },
  containerDetail: {
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 14,
  },
  baseExperience: {
    width: '100%',
    padding: 14,
    borderRadius: 100,
    marginTop: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: APP_COLORS.backgroundCharacteristics,
    flexDirection: 'row',
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#272727',
  },
  containerText: {
    backgroundColor: APP_COLORS.backgroundCharacteristics,
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 24,
    fontWeight: '500',
  },
});
