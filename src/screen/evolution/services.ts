import {AxiosRequest, baseURL} from '../../constants/baseURL';

interface IEvolution {
  url: string;
}

const getEvolution = data => {
  const evolution = [data.chain.species.name];
  const getNewEvolution = evolutionData => {
    if (evolutionData.length) {
      evolution.push(evolutionData[0].species.name);
      getNewEvolution(evolutionData[0].evolves_to);
    }
  };
  getNewEvolution(data.chain.evolves_to);
  return evolution;
};

export const servicesEvolution = async (url: IEvolution) => {
  const urlEvolution = url.split(baseURL);
  try {
    const data = await AxiosRequest.get(`${baseURL}${urlEvolution[1]}`);
    const resp = data.data;
    const evolutionArray = getEvolution(resp);
    const promises = evolutionArray.map(item => {
      return AxiosRequest.get(`${baseURL}/pokemon/${item}`)
        .then(({data}) => data)
        .catch(err => err);
    });
    const respPromise = await Promise.all(promises);
    return respPromise;
  } catch (err) {
    throw 'Error';
  }
};
