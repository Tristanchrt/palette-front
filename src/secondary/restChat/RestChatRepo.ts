import { AxiosInstance, AxiosResponse } from 'axios'; 
import { RestChat } from 'src/domain/RestChat';
import chat from "../fixture/chatFXT";

export default class RestChatRepo implements RestChat  {
  private axiosInstance: AxiosInstance;
  private baseURL: string;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.baseURL = '/chat'
  }
  
  async getAccountList(user_id: string): Promise<Array<any>> {
    // return this.axiosInstance
    //   .get(this.baseURL+'/autoComplete')
    //   .then((response: AxiosResponse<any>) => response.data)
    //   .catch(error => {
    //     throw new Error(error.message);
    //   });
    return chat.accountList;
  }
  async getMessages(user_id: string, room_id: string): Promise<Array<any>> {
    // return this.axiosInstance
    //   .get(this.baseURL+'/autoComplete')
    //   .then((response: AxiosResponse<any>) => response.data)
    //   .catch(error => {
    //     throw new Error(error.message);
    //   });
    return chat.room1;
  }

}
