import { AxiosInstance, AxiosResponse } from 'axios';
import { StoreRepository } from 'src/domain/RestStore';
import { useStore } from 'vuex';

import { RestUser } from '../../domain/RestUser';
import item from "../fixture/itemFXT";

export default class RestUserRepo implements RestUser {
  private axiosInstance: AxiosInstance;
  private baseURL: string;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.baseURL = 'users'
  }
  async signIn(email: string, password: string): Promise<any> {
    const store = useStore();
    return this.axiosInstance
      .post(this.baseURL+'/login', {
        email: email,
        password: password
      })
      .then((response: AxiosResponse<any>) => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        throw new Error(error.message);
      });

    return email + password;
  }
  async signUp(form: any): Promise<any> {
    return this.axiosInstance
      .post(this.baseURL+'/signUp', form)
      .then((response: AxiosResponse<any>) => response.data)
      .catch(error => {
        throw new Error(error.message);
      });
    return form;
  }

}
