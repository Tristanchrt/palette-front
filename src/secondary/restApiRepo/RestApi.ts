import { AxiosInstance, AxiosResponse } from 'axios';

import { RestApiPalette } from '../../domain/RestApi';

export default class RestApiPaletteRepository implements RestApiPalette {
  private axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async axiosGet(baseURL: string): Promise<any> {
    return this.axiosInstance
      .get(baseURL)
      .then((response: AxiosResponse<any>) => response.data)
      .catch(error => {
        throw new Error(error.message);
      });
  }
  async axiosGets(baseURL: string): Promise<any> {
    return this.axiosInstance
      .get(baseURL)
      .then((response: AxiosResponse<any>) => response.data)
      .catch(error => {
        throw new Error(error.message);
      });
  }

  axiosTest(baseURL: string): string {
    return 'Url API and and ' + baseURL;
  }
}
