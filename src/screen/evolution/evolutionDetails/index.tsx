import React from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {Navigation, RootStackParamList} from '../../../navigation/utils';
import {COLOR} from '../../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {capitalize} from '../../../utils/capitalize';
import {StatsPokemon} from '../../../components/StatsPokemon';
import style from './style';
import {Types} from '../../../components/Types';
import {BottonBack} from '../../../components/BottonBack';

export const EvolutionDetail = ({
  route,
}: Navigation<RootStackParamList, 'DetailEvolution'>) => {
  return (
    <LinearGradient
      start={{x: 0.4, y: 0.4}}
      end={{x: 1, y: 1}}
      colors={[
        COLOR[route.params.evolution[0].types[0].type.name].base,
        COLOR[route.params.evolution[0].types[0].type.name].color,
      ]}
      style={style.safeArea}>
      <SafeAreaView style={style.safeArea}>
        <View style={{paddingVertical: 18}}>
          <BottonBack />
        </View>

        <FlatList
          data={route.params.evolution}
          ListHeaderComponent={
            <Types
              types={route.params.evolution[0].types}
              width={'35%'}
              fontSize={18}
              sizeImage={30}
            />
          }
          renderItem={({item, index}) => (
            <View>
              <View style={style.containerEvolution}>
                <View
                  style={[
                    index % 2 === 0
                      ? {flexDirection: 'row'}
                      : {flexDirection: 'row-reverse'},
                    ,
                    style.containerPokemonData,
                  ]}>
                  <View>
                    <Text style={style.namePokemon}>
                      {capitalize(item.name)}
                    </Text>
                    <Image
                      source={{
                        uri: `${item.sprites?.other?.home.front_default}`,
                      }}
                      style={style.pokemon}
                    />
                  </View>

                  <View style={style.stats}>
                    <StatsPokemon stats={item.stats} />
                  </View>
                </View>
              </View>

              {route.params.evolution.length - 1 > index && (
                <View style={style.containerArrow}>
                  <Image
                    source={require('../../../assets/chevron-dobles.png')}
                    style={style.arrow}
                  />
                </View>
              )}
            </View>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};
