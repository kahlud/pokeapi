import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Navigation, RootStackParamList} from '../../../navigation/utils';
import {COLOR} from '../../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {capitalize} from '../../../utils/capitalize';
import style from './style';
import {Characteristics} from './components/Characteristics';
import {StatsPokemon} from '../../../components/StatsPokemon';
import {AxiosRequest} from '../../../constants/baseURL';
import {PokemonsSpecie} from '../../../interfaces/pokemonSpecie';
import {Detail} from './components/Detail';
import {Botton} from '../../../components/Botton';
import {useNavigation} from '@react-navigation/native';
import {BottonBack} from '../../../components/BottonBack';

export const DetailsPokemon = ({
  route,
}: Navigation<RootStackParamList, 'DetailPokemon'>) => {
  const [specie, setSpecie] = useState<PokemonsSpecie>();

  const navigation = useNavigation();

  useEffect(() => {
    const data = async () => {
      const resp = await AxiosRequest.get(route.params.pokemon.species.url);
      setSpecie(resp.data);
    };
    data();
  }, []);

  return (
    <LinearGradient
      start={{x: 0.4, y: 0.4}}
      end={{x: 1, y: 1}}
      colors={[
        COLOR[route.params.pokemon?.types[0].type.name].base,
        COLOR[route.params.pokemon?.types[0].type.name].color,
      ]}
      style={style.safeArea}>
      <SafeAreaView style={style.safeArea}>
        <View style={style.containerHeader}>
          <BottonBack />
          <Text style={style.name}>
            {capitalize(route.params.pokemon.name)}
          </Text>
        </View>
        <ScrollView bounces={false}>
          <View style={style.containerImage}>
            <Image
              source={{
                uri: `${route.params.pokemon?.sprites?.other?.home.front_default}`,
              }}
              style={style.image}
            />
          </View>

          <View style={style.containerDetail}>
            <Characteristics
              weight={route.params.pokemon.weight}
              height={route.params.pokemon.height}
              types={route.params.pokemon.types}
            />
            <StatsPokemon stats={route.params.pokemon.stats} />

            <View style={style.baseExperience}>
              <Detail
                num={route.params.pokemon.base_experience}
                text="Experiencia base"
              />
              <View style={style.divider} />
              <Detail num={specie?.base_happiness} text="Felicidad base" />
            </View>

            <View style={style.containerText}>
              {specie?.flavor_text_entries.map((item, index) =>
                item.language.name === 'es' ? (
                  <Text key={index} style={style.text}>
                    {item.flavor_text}
                  </Text>
                ) : null,
              )}
            </View>
            <Botton
              title="Evolucion"
              color="white"
              width="60%"
              marginTop={10}
              onClick={() => navigation.navigate('Evolution')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
