import axios from 'axios';

export const baseURL = 'https://pokeapi.co/api/v2';

class AxiosInstance {
  static instance: AxiosInstance;

  constructor() {
    if (AxiosInstance.instance) {
      return AxiosInstance.instance;
    }
    AxiosInstance.instance = this;
  }

  InstanceMethod = () => {
    const instance = axios.create({
      baseURL: `${baseURL}`,
    });
    return instance;
  };
}

export const AxiosRequest = new AxiosInstance().InstanceMethod();
