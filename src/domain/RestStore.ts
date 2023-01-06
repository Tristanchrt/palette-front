import { RestUser } from "./RestUser";

export interface UserStoreDomain {
  resetState(): void;
  getUser(): RestUser;
  setUser(value: RestUser): RestUser;
  getToken(): string;
  setToken(value: string): string;
}

export interface StoreRepository {
  user(): UserStoreDomain;
}
