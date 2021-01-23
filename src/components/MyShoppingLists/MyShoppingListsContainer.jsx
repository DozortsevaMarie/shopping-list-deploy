import React from 'react';
import MyShoppingLists from "./MyShoppingLists";
import {connect} from "react-redux";
import {deleteItemFromSavedList, deleteList} from "../../redux/mainPageReducer";




const MyShoppingListsContainer = (props) => {

    return (
        <div>
             <MyShoppingLists deleteItemFromSavedList={props.deleteItemFromSavedList} deleteList={props.deleteList} savedLists={props.savedLists}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        savedLists: state.mainPageReducer.savedLists,
    }
}

export default connect(mapStateToProps, {deleteItemFromSavedList, deleteList})(MyShoppingListsContainer);