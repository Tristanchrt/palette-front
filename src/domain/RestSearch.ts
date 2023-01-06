export interface RestSearch {
  getAutoComplete(text: string, category: string): Promise<any>;
  getSearching(params: any): Promise<any>;
}
