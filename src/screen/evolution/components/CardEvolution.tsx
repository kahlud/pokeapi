import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {servicesEvolution} from '../services';
import {COLOR} from '../../../constants/colors';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {capitalize} from '../../../utils/capitalize';

export const CardEvolution = ({url}) => {
  const [dataPokemonEvolution, setDataPokemonEvolution] = useState();
  const [haveError, setHaveError] = useState(false);

  const navigate = useNavigation();

  useEffect(() => {
    servicesEvolution(url)
      .then(data => setDataPokemonEvolution(data))
      .catch(_ => {
        setHaveError(true);
      });
  }, []);

  if (haveError) {
    return <Text>Error</Text>;
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate('DetailEvolution', {evolution: dataPokemonEvolution})
      }
      style={[
        style.touchableEvolution,
        {
          backgroundColor: dataPokemonEvolution
            ? COLOR[dataPokemonEvolution[0].types[0].type.name].base
            : COLOR.normal.base,
        },
      ]}>
      {dataPokemonEvolution?.map((item, index) => {
        return (
          <View style={style.containerPokemon}>
            <View style={style.containerInfo}>
              <View style={style.circle} />
              <Image
                source={{uri: `${item.sprites?.other?.home.front_default}`}}
                style={style.image}
              />
              <Text style={style.name}>{capitalize(item.name)}</Text>
            </View>
            {dataPokemonEvolution.length - 1 > index && (
              <Image
                source={require('../../../assets/flecha-derecha.png')}
                style={style.arrow}
              />
            )}
          </View>
        );
      })}
    </TouchableOpacity>
  );
};
