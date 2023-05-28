import ListItem from "./ListItem";

interface List{
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem ): void,
  removeItem(id: string): void
} 

export default class FullList implements List{
  // Only one instance of FullList is required
  static instance: FullList = new FullList();

  private constructor(
    private _list: ListItem[]= []
  ){}

  load(): void {

  }

  save(): void {
    
  }

  clearList(): void {
    this._list = [];
  }

  addItem(itemObj: ListItem ): void {
    this._list.push(itemObj);
  }

  removeItem(id: string): void {
    
  }

}
