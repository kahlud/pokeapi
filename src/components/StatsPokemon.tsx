import React from 'react';
import {Text, View} from 'react-native';
import {Stat} from '../interfaces/pokemonDetail';
import style from './style';

interface IStats {
  stats: [Stat];
}

export const StatsPokemon = ({stats}: IStats) => {
  return (
    <View style={style.containerStats}>
      {stats.map((item, index) => {
        return (
          <View style={style.containerStatsMap} key={index}>
            <Text style={style.titleStats}>{item.stat.name}</Text>
            <View style={style.containerProgress}>
              <View
                style={[
                  style.progressColor,
                  {
                    width: item.base_stat > 100 ? '100%' : `${item.base_stat}%`,
                  },
                ]}
              />
              <View
                style={[
                  style.progressWhite,
                  {
                    width:
                      item.base_stat > 100 ? '0%' : `${100 - item.base_stat}%`,
                  },
                ]}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};
