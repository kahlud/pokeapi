interface IColor {
  [type: string]: {base: string; color: string};
}

export const APP_COLORS = {
  background: '#EFFAFF',
  backgroundCharacteristics: '#ffffffed',
};

export const COLOR: IColor = {
  fire: {base: '#FFDBA9', color: '#F8A330'},
  water: {base: '#D0F1FF', color: '#51C5F7'},
  grass: {base: '#C0FFC8', color: '#51DD61'},
  normal: {base: '#E8E8DE', color: '#ABAB93'},
  fighting: {base: '#E6C6B1', color: '#C19070'},
  flying: {base: '#CCE3EE', color: '#83B3CB'},
  poison: {base: '#DCC8E2', color: '#B179C1'},
  ground: {base: '#FFD29B', color: '#DA953F'},
  rock: {base: '#FFC9A7', color: '#E7874B'},
  bug: {base: '#DEFFC9', color: '#86DA51'},
  ghost: {base: '#ECDDEF', color: '#B67BC1'},
  steel: {base: '#CBDDD0', color: '#7FB78F'},
  electric: {base: '#FFFBC8', color: '#DED028'},
  psychic: {base: '#E7C6D7', color: '#EA4A9D'},
  ice: {base: '#dceefa', color: '#8AD1FF'},
  dragon: {base: '#DCD1F6', color: '#763FF5'},
  dark: {base: '#d0cfd2', color: '#5A5A5C'},
  fairy: {base: '#EACBD2', color: '#E85475'},
  shadow: {base: '#BDBBDA', color: '#5C589B'},
  unknown: {base: '#DAD8D7', color: '#76706D'},
};

// enum ColorsEnum {
//   'fire' = 'fire',
//   'water' = 'water',
//   'grass' = 'grass',
//   'normal' = 'normal',
//   'fighting' = 'fighting',
//   'flying' = 'flying',
//   'poison' = 'poison',
//   'ground' = 'ground',
//   'rock' = 'rock',
//   'bug' = 'bug',
//   'ghost' = 'ghost',
//   'steel' = 'steel',
//   'electric' = 'electric',
//   'psychic' = 'psychic',
//   'ice' = 'ice',
//   'dragon' = 'dragon',
//   'dark' = 'dark',
//   'fairy' = 'fairy',
//   'shadow' = 'shadow',
//   'unknown' = 'unknown',
// }
