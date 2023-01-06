import base64 from 'base-64';
export class LocalStorage {
  static userToken: string = 'plt_id';
  static userValue: string = 'plt_d';
  static shopBag: string = 'plt_sb';

  static setUserToken(token: string) {
    localStorage.setItem(this.userToken, token!);
  }

  static removeUserToken(): boolean {
    localStorage.removeItem(this.userToken);
    return true;
  }

  static getUserToken(): string | null {
    return localStorage.getItem(this.userToken);
  }

  static setUserValue(user: any) {
    user = base64.encode(JSON.stringify(user));
    console.log(user);
    localStorage.setItem(this.userValue, user!);
  }

  static removeUserValue(): boolean {
    localStorage.removeItem(this.userValue);
    return true;
  }

  static getUserValue(): any  {
    let value = JSON!.parse(base64!.decode(localStorage!.getItem(this.userValue) as any | null));
    return value
  }

  static setShopBag(shopBag: any) {
    LocalStorage.removeShopBag();
    const val = base64.encode(JSON.stringify(shopBag));
    localStorage.setItem(this.shopBag, val);
  }

  static removeShopBag(): boolean {
    localStorage.removeItem(this.shopBag);
    return true;
  }

  static getShopBag(): any  {
    let value = JSON!.parse(base64!.decode(localStorage!.getItem(this.shopBag) as any | null));
    return value
  }

  static getLocalParse(name: string): any  {
    let value = JSON!.parse(base64!.decode(localStorage!.getItem(name) as any | null));
    return value
  }

  static removeParse(name :string): boolean {
    localStorage.removeItem(name);
    return true;
  }

  static setParseLocal(name: string, data: any) {
    LocalStorage.removeParse(name);
    const val = base64.encode(JSON.stringify(data));
    localStorage.setItem(name, val);
  }

}
