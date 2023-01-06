import base64 from "base-64";

export function isCompany(){
  if(!localStorage!.getItem('plt_id')) return false;
  const USER = JSON.parse(base64!.decode(localStorage!.getItem('plt_id')!.split('.')[1])).user;
  if(USER.rules == 'NYKy5kWnJhUaA6X9WwW'){
    return true;
  }else{
    return false;
  }
}