import { AxiosInstance, AxiosResponse } from 'axios';

import { RestSearch } from '../../domain/RestSearch';
import item from "../fixture/itemFXT";

export default class RestSearchRepo implements RestSearch {
  private axiosInstance: AxiosInstance;
  private baseURL: string;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.baseURL = '/items/search/'
  }
  async getAutoComplete(text: string, category: string): Promise<any> {
    // return this.axiosInstance
    //   .get(this.baseURL+'/autoComplete')
    //   .then((response: AxiosResponse<any>) => response.data)
    //   .catch(error => {
    //     throw new Error(error.message);
    //   });
    return text;
  }

  async getSearching(params: any): Promise<any> {
    return [item.item1, item.item2, item.item2, item.item2, item.item2, item.item2];
  }

}
