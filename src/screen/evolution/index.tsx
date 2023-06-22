import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {fetchPokemonsEvolution} from './store/services';
import style from './style';
import {CardEvolution} from './components/CardEvolution';

export const EvolutionScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPokemonsEvolution());
  }, [dispatch]);

  const pokemonEvolutionData = useSelector(
    (state: RootState) => state.pokemonEvolution.data,
  );

  const pokemonEvolutionLoading = useSelector(
    (state: RootState) => state.pokemonEvolution.loading,
  );

  if (pokemonEvolutionLoading) {
    return <ActivityIndicator size={'large'} style={style.loading} />;
  }

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.containerFlatList}>
          <Text style={style.title}>Evoluciones</Text>
        </View>
        <FlatList
          data={pokemonEvolutionData}
          bounces={false}
          renderItem={({item}) => (
            <CardEvolution url={item.url} key={item.url} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
