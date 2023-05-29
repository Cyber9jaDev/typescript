import ListItem from "./ListItem";

interface List{
  list: ListItem[],     //Getter
  load(): void,         // Void Function
  save(): void,         // Void Function
  clearList(): void,      // Void Function
  addItem(itemObj: ListItem ): void,      // Void Function
  removeItem(id: string): void      // Void Function
} 

export default class FullList implements List{
  // Only one instance of FullList is required, we need to refer to this class
  static instance: FullList = new FullList();

  // Create a singleton instance of FullList
  private constructor(private _list: ListItem[]= []){ 
    // this._list = _list;
  }

  get list():  ListItem[] { return this._list }

  // Create a new list item for each one that was stringified and saved in the local storage and populating the list again 
  load(): void {
    const storedList: string | null = localStorage.getItem('list');

    if(typeof storedList !== 'string') return

    const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList);
    
    parsedList.forEach(itemObj => {
      const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
      FullList.instance.addItem(newListItem);
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
