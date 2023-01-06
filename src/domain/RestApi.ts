export interface RestApiPalette {
  axiosGet(baseURL: string): Promise<any>;
  axiosGets(baseURL: string, pokmeon: string): Promise<any>;
  axiosTest(baseURL: string): string;
}
