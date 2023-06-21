// export const LOGO = {
//   fire: 'fuego.png',
//   water: 'agua.png',
//   grass: 'hojas.png',
//   normal: 'estrella.png',
//   fighting: 'guante-de-boxeo.png',
//   flying: 'alas.png',
//   poison: 'tubo-de-ensayo.png',
//   ground: 'sequia.png',
//   rock: 'roca.png',
//   bug: 'error.png',
//   ghost: 'fantasma.png',
//   steel: 'acero.png',
//   electric: 'rayo.png',
//   psychic: 'galaxia-espiral.png',
//   ice: 'cubos-de-hielo.png',
//   dragon: 'continuar.png',
//   dark: 'oscuro.png',
//   fairy: 'hada.png',
//   shadow: 'avatar.png',
//   unknown: 'huevoRoto.png',
// };

interface ILogo {
  [x: string]: any;
}

export const LOGO: ILogo = {
  fire: require('../assets/fuego.png'),
  water: require('../assets/agua.png'),
  grass: require('../assets/hojas-de-coca.png'),
  normal: require('../assets/estrellas.png'),
  fighting: require('../assets/guante-de-boxeo.png'),
  flying: require('../assets/alas.png'),
  poison: require('../assets/tubo-de-ensayo.png'),
  ground: require('../assets/sequia.png'),
  rock: require('../assets/roca.png'),
  bug: require('../assets/error.png'),
  ghost: require('../assets/fantasma.png'),
  steel: require('../assets/acero.png'),
  electric: require('../assets/rayo.png'),
  psychic: require('../assets/galaxia-espiral.png'),
  ice: require('../assets/cubos-de-hielo.png'),
  dragon: require('../assets/continuar.png'),
  dark: require('../assets/oscuro.png'),
  fairy: require('../assets/hada.png'),
  shadow: require('../assets/avatar.png'),
  unknown: require('../assets/huevoRoto.png'),
};
