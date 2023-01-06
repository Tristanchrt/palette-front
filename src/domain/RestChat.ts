export interface RestChat {
  getAccountList(user_id: string): Promise<Array<any>>;
  getMessages(user_id: string, room_id: string): Promise<Array<any>>;
}
