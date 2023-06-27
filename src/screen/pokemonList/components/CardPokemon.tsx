import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AxiosRequest, baseURL} from '../../../constants/baseURL';
import {COLOR} from '../../../constants/colors';
import {capitalize} from '../../../utils/capitalize';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {PokemonDetail} from '../../../interfaces/pokemonDetail';
import {Types} from '../../../components/Types';

interface IPokemon {
  url: string;
}

export const CardPokemon = ({url}: IPokemon) => {
  const urlPokemon = url.split(baseURL);
  const [dataPokemon, setdataPokemon] = useState<PokemonDetail>();
  const {navigate} = useNavigation();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const data = async () => {
      const resp = await AxiosRequest.get(`${baseURL}${urlPokemon[1]}`);
      setdataPokemon(resp.data);
    };
    data();
  }, []);

  if (!dataPokemon) {
    return (
      <ActivityIndicator
        size={'large'}
        color={'red'}
        style={style.loadingCard}
      />
    );
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigate('DetailPokemon', {
          pokemon: dataPokemon,
          isFavorite: favorite,
          setIsFavorite: setFavorite,
        })
      }
      style={[
        style.card,
        {backgroundColor: COLOR[dataPokemon?.types[0].type.name].base},
      ]}>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          marginRight: 28,
          marginBottom: 14,
          marginTop: -6,
        }}
        onPress={() => setFavorite(!favorite)}>
        {favorite ? (
          <Image
            source={require('../../../assets/favorito.png')}
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
            }}
          />
        ) : (
          <Image
            source={require('../../../assets/favoritoBW.png')}
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
            }}
          />
        )}
      </TouchableOpacity>
      <View style={style.background}>
        <Image
          source={{uri: `${dataPokemon?.sprites?.other?.home.front_default}`}}
          style={style.image}
        />
      </View>

      <Text style={style.name}>{capitalize(dataPokemon.name)}</Text>

      <Types
        sizeImage={14}
        fontSize={14}
        width={'42%'}
        types={dataPokemon.types}
      />
    </TouchableOpacity>
  );
};
