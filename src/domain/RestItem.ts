export interface RestItem {
  getItem(itemId: string): Promise<any>;
  getItemByUser(itemId: string): Promise<any>;
}
