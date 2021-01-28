const CHANGE_PRODUCT_VALUE = 'CHANGE_PRODUCT_VALUE';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const EDIT_CONTENT = 'EDIT_CONTENT';
const SAVE_LIST = 'SAVE_LIST';
const ADD_ITEM_TO_SAVED_LIST = 'ADD_ITEM_TO_SAVED_LIST';
const DELETE_ITEM_FROM_SAVED_LIST = 'DELETE_ITEM_FROM_SAVED_LIST';
const EDIT_ITEM_IN_SAVED_LIST = 'EDIT_ITEM_IN_SAVED_LIST';
const DELETE_LIST = 'DELETE_LIST';



let initialState = {
    inputElement: '',
    shoppingList: [],
    savedLists: [],

}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRODUCT_VALUE:
            return {
                ...state,
                inputElement: action.value,
            }
        case ADD_PRODUCT:
            let newProduct = {
                key: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                name: action.name,
            }
            return {
                ...state,
                shoppingList: [...state.shoppingList, newProduct],
                inputElement: "",
            }
        case EDIT_CONTENT:
            let index = state.shoppingList.findIndex(item => action.row.key === item.key);
            return {
                ...state,
                shoppingList: [...state.shoppingList.slice(0, index), action.row, ...state.shoppingList.slice((index + 1), state.shoppingList.length)],
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                shoppingList: state.shoppingList.filter(item => item.id !== action.itemId),
            }
        case SAVE_LIST:
            let newList = {
                id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                title: action.title,
                description: action.description,
                items: action.list,
            }
            return {
                ...state,
                savedLists: [...state.savedLists, newList],
                shoppingList: [],
                inputElement: '',
            }
        case ADD_ITEM_TO_SAVED_LIST:
            let arrIndex = state.savedLists.findIndex(item => item.id === action.item.id);
            let newItem = {
                id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                name: action.name,
            }
            let newArr = {
                id: action.item.id,
                title: action.item.title,
                description: action.item.description,
                items: [...action.item.items, newItem]
            }
            return {
                ...state,
                savedLists: [...state.savedLists.slice(0, arrIndex), newArr, ...state.savedLists.slice(arrIndex + 1, state.savedLists.length)],
            }
        case DELETE_ITEM_FROM_SAVED_LIST:
            let listIndex = state.savedLists.findIndex(item => item.id === action.item.id);

            let updatedList = {
                id: action.item.id,
                title: action.item.title,
                description: action.item.description,
                items: action.item.items.filter(i => i.id !== action.id)
            }

            return {
                ...state,
                savedLists: [...state.savedLists.slice(0, listIndex), updatedList, ...state.savedLists.slice(listIndex + 1, state.savedLists.length)],
            }
        case EDIT_ITEM_IN_SAVED_LIST:
            let arrayIndex = state.savedLists.findIndex(item => item.id === action.item.id);
            let itemIndex = state.savedLists[arrayIndex].items.findIndex(item => action.row.key === item.key);
            let editedList = {
                id: action.item.id,
                title: action.item.title,
                description: action.item.description,
                items: [...action.item.items.slice(0, itemIndex), action.row, ...action.item.items.slice((itemIndex + 1), action.item.items.length)]
            }
            return {
                ...state,
                savedLists: [...state.savedLists.slice(0, arrayIndex), editedList, ...state.savedLists.slice(arrayIndex + 1, state.savedLists.length)],
            }

        case DELETE_LIST:
            return {
                ...state,
                savedLists: state.savedLists.filter(list => list.id !== action.list.id)
            }
        default: {
            return state
        }
    }
}


export const changeProductValue = (value) => ({type: CHANGE_PRODUCT_VALUE, value});

export const addProduct = (item, name) => ({type: ADD_PRODUCT, item, name});

export const editContent = (item, row) => ({type: EDIT_CONTENT, item, row});

export const deleteProduct = (item, itemId) => ({type: DELETE_PRODUCT, item, itemId});

export const saveList = (title, description, list) => ({type: SAVE_LIST, title, description, list});

export const addItemToSavedList = (item, name) => ({type: ADD_ITEM_TO_SAVED_LIST, item, name})

export const deleteItemFromSavedList = (item, id) => ({type: DELETE_ITEM_FROM_SAVED_LIST, item, id});

export const editItemInSavedList = (item, row) => ({type: EDIT_ITEM_IN_SAVED_LIST, item, row});

export const deleteList = (list) => ({type: DELETE_LIST, list});



export default mainPageReducer;