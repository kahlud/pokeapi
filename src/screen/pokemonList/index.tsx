import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import style from './style';
import {CardPokemon} from './components/CardPokemon';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {fetchPokemonsList} from './store/services';
import {AppDispatch} from '../../redux/store';
import {Tab} from './components/Tab';

export const PokemonScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemonsList());
  }, [dispatch]);

  const pokemonsData = useSelector(
    (state: RootState) => state.pokemonsList.data,
  );

  const pokemonsDataLoading = useSelector(
    (state: RootState) => state.pokemonsList.loading,
  );

  if (pokemonsDataLoading) {
    return <ActivityIndicator size={'large'} style={style.loading} />;
  }

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <View style={style.containerTitle}>
          <Text style={style.title}>Pokemon</Text>
        </View>
        <FlatList
          data={pokemonsData}
          bounces={false}
          ListHeaderComponent={<Tab />}
          stickyHeaderIndices={[0]}
          renderItem={({item}) => (
            <CardPokemon url={item.url} key={item.name} />
          )}
          numColumns={2}
          columnWrapperStyle={style.flatList}
        />
      </View>
    </SafeAreaView>
  );
};
