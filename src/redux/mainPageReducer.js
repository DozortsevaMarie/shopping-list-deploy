const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const EDIT_CONTENT = "EDIT_CONTENT";
const SAVE_LIST = "SAVE_LIST";
const ADD_ITEM_TO_SAVED_LIST = "ADD_ITEM_TO_SAVED_LIST";
const DELETE_ITEM_FROM_SAVED_LIST = "DELETE_ITEM_FROM_SAVED_LIST";
const EDIT_ITEM_IN_SAVED_LIST = "EDIT_ITEM_IN_SAVED_LIST";
const DELETE_LIST = "DELETE_LIST";

let initialState = {
  shoppingList: [],
  savedLists: [],
};

const generateNumber = () => {
  return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
};
const addNewProduct = (action) => {
  return {
    key: generateNumber(),
    id: generateNumber(),
    name: action.name,
  };
};
const addNewList = (action) => {
  return {
    id: generateNumber(),
    title: action.title,
    description: action.description,
    items: action.list,
  };
};
const findIndex = (state, action) => {
  return state.savedLists.findIndex((item) => item.id === action.item.id);
};
const updateList = (state, action, result) => {
  return {
    id: action.item.id,
    title: action.item.title,
    description: action.item.description,
    items: result,
  };
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        shoppingList: [...state.shoppingList, addNewProduct(action)],
        inputElement: "",
      };
    case EDIT_CONTENT:
      let index = state.shoppingList.findIndex(
        (item) => action.row.key === item.key
      );
      return {
        ...state,
        shoppingList: [
          ...state.shoppingList.slice(0, index),
          action.row,
          ...state.shoppingList.slice(index + 1, state.shoppingList.length),
        ],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        shoppingList: state.shoppingList.filter(
          (item) => item.id !== action.itemId
        ),
      };
    case SAVE_LIST:
      return {
        ...state,
        savedLists: [...state.savedLists, addNewList(action)],
        shoppingList: [],
        inputElement: "",
      };
    case ADD_ITEM_TO_SAVED_LIST:
      return {
        ...state,
        savedLists: [
          ...state.savedLists.slice(0, findIndex(state, action)),
          updateList(state, action, [
            ...action.item.items,
            addNewProduct(action),
          ]),
          ...state.savedLists.slice(
            findIndex(state, action) + 1,
            state.savedLists.length
          ),
        ],
      };
    case DELETE_ITEM_FROM_SAVED_LIST:
      return {
        ...state,
        savedLists: [
          ...state.savedLists.slice(0, findIndex(state, action)),
          updateList(
            state,
            action,
            action.item.items.filter((i) => i.id !== action.id)
          ),
          ...state.savedLists.slice(
            findIndex(state, action) + 1,
            state.savedLists.length
          ),
        ],
      };
    case EDIT_ITEM_IN_SAVED_LIST:
      let itemIndex = state.savedLists[
        findIndex(state, action)
      ].items.findIndex((item) => action.row.key === item.key);
      return {
        ...state,
        savedLists: [
          ...state.savedLists.slice(0, findIndex(state, action)),
          updateList(state, action, [
            ...action.item.items.slice(0, itemIndex),
            action.row,
            ...action.item.items.slice(itemIndex + 1, action.item.items.length),
          ]),
          ...state.savedLists.slice(
            findIndex(state, action) + 1,
            state.savedLists.length
          ),
        ],
      };

    case DELETE_LIST:
      return {
        ...state,
        savedLists: state.savedLists.filter(
          (list) => list.id !== action.list.id
        ),
      };
    default: {
      return state;
    }
  }
};


export const addProduct = (item, name) => ({ type: ADD_PRODUCT, item, name });

export const editContent = (item, row) => ({ type: EDIT_CONTENT, item, row });

export const deleteProduct = (item, itemId) => ({
  type: DELETE_PRODUCT,
  item,
  itemId,
});

export const saveList = (title, description, list) => ({
  type: SAVE_LIST,
  title,
  description,
  list,
});

export const addItemToSavedList = (item, name) => ({
  type: ADD_ITEM_TO_SAVED_LIST,
  item,
  name,
});

export const deleteItemFromSavedList = (item, id) => ({
  type: DELETE_ITEM_FROM_SAVED_LIST,
  item,
  id,
});

export const editItemInSavedList = (item, row) => ({
  type: EDIT_ITEM_IN_SAVED_LIST,
  item,
  row,
});

export const deleteList = (list) => ({ type: DELETE_LIST, list });

export default mainPageReducer;
