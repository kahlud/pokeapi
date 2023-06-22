import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../constants/colors';

export default StyleSheet.create({
  containerBotton: {
    paddingVertical: 14,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#242424',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },

  containerTypeList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  containerType: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#606060',
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    elevation: 4,
    marginTop: 10,
    marginHorizontal: 4,
  },
  typeName: {fontWeight: '500', textAlign: 'center', color: 'white'},
  containerStats: {
    backgroundColor: APP_COLORS.backgroundCharacteristics,
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginTop: 8,
  },
  containerStatsMap: {marginVertical: 8},
  titleStats: {fontSize: 16, fontWeight: '500', marginBottom: 3},
  containerProgress: {flexDirection: 'row'},
  progressColor: {
    height: 6,
    backgroundColor: '#51BD00',
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    shadowColor: '#6c6c6c',
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {width: 2, height: 3},
    elevation: 2,
  },
  progressWhite: {
    height: 6,
    backgroundColor: '#f4f4f4',
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    shadowColor: '#6c6c6c',
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {width: 2, height: 3},
    elevation: 2,
  },

  touchableBack: {
    position: 'absolute',
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  back: {
    width: 25,
    height: 25,
  },
});
