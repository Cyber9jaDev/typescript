import { CartItemType } from "../context/CartProvider";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";


type PropsType = {
  item: CartItemType,
  dispatch: React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
}


const CartLineItem = ({item, dispatch, REDUCER_ACTIONS}: PropsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href

  const lineTotal: number = (item.qty * item.price);

  const highestQty: number = 20 > item.qty ? 20 : item.qty //.

  constHigherBidder = 
  return (
    <div>CartLineItem</div>
  )
}

export default CartLineItem