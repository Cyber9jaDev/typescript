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
  // Only one instance of FullList is required, we need to refer to this class
  static instance: FullList = new FullList();

  // There will only be one instance of this class created
  private constructor( private _list: ListItem[]= []){}

  get list():  ListItem[] {
    return this._list
  }

  load(): void {
    const storedList: string | null = localStorage.getItem('list');
    if(typeof storedList !== 'string') return

    const parsedList: { _id: string, _item: string, checked: boolean }[] = JSON.parse(storedList);
    
    parsedList.forEach(itemObj => {
      const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj.checked);
    });
  }

  save(): void {
    localStorage.setItem('list', JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem ): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id);
    this.save();
  }

}
