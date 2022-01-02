import {
  ITEM_ADDED,
  ITEM_DELETED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    let item = { uuid: id++, quantity: 1, ...action.payload };
    return [...state, item];
  }

  if (action.type === ITEM_DELETED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    return state.map((item) => {
      if (item.uuid !== action.payload.uuid) return item;
      return { ...item, price: action.payload.price };
    });
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    return state.map((item) => {
      if (item.uuid !== action.payload.uuid) return item;
      return { ...item, quantity: action.payload.quantity };
    });
  }

  return state;
};

export default reducer;
