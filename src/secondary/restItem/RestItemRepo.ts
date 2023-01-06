import { AxiosInstance, AxiosResponse } from 'axios'; 
import { RestItem } from 'src/domain/RestItem';
import item from "../fixture/itemFXT";

export default class RestItemRepo implements RestItem  {
  private axiosInstance: AxiosInstance;
  private baseURL: string;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.baseURL = '/items'
  }
  async getItem(itemId: string): Promise<any> {
    return this.axiosInstance
      .get(this.baseURL+'/'+itemId)
      .then((response: AxiosResponse<any>) => response.data)
      .catch(error => {
        throw new Error(error.message);
      });
  }

  async getItemByUser(input: string): Promise<any> {
    return input
  }

}
