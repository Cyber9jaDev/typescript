/* eslint-disable @typescript-eslint/no-empty-function */
import { useMemo, useReducer, createContext } from 'react';

export type CartItemType = { 
  name: string, 
  sku: string, 
  price: number, 
  qty: number 
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = { type: string, payload?: CartItemType };

// Reduce function
const reducer = (state: CartStateType, { type, payload }: ReducerAction): CartStateType => {
  // Add item to cart
  if(type === REDUCER_ACTION_TYPE.ADD){
    if(!payload){
      throw new Error('No payload found');
    }

    const { sku, name, price } = payload;

    const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku);
    
    const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku);
    
    const qty: number = itemExists ? itemExists.qty + 1 : 1;

    return { ...state, cart: [...filteredCart, { sku, name, price, qty }] }
  }

  // Remove an item from cart
  else if(type === 'REMOVE'){
    if(!payload){
      throw new Error('No payload found')
    }

    const { sku } = payload;

    const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku);
    
    return { ...state, cart: [... filteredCart] }
  }

  else if(type === 'QUANTITY'){
    if(!payload){
      throw new Error('No payload found')
    }

    const { sku, qty } = payload;

    const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku);

    if(!itemExists){
      throw new Error("Item must exist in order to update quantity")
    }

    const updatedItem: CartItemType = { ...itemExists, qty };

    const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku);
    
    return { ...state, cart: [ ...filteredCart, updatedItem ]}
  }

  else if(type === 'SUBMIT'){
    return { ...state, cart: [] }
  }

  return { ...state }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])

  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty
  }, 0);

  const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + (cartItem.price * cartItem.qty);
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA -  itemB;
  });

  return { dispatch, totalItems, totalPrice, cart, REDUCER_ACTIONS };
};

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: '',
  cart: []
}

export const CartContext = createContext<UseCartContextType>(initCartContextState);