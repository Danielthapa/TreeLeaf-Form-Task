import { ADD_INFO, DELETE_INFO, EDIT_INFO } from './actionTypes';

export const addInfo = newInfo => ({
    type: ADD_INFO,
    payload: newInfo
});

export const editInfo = (newInfo, id) => ({
    type: EDIT_INFO,
    payload: {
        id,
        newInfo
    }
})

export const deleteInfo = id => ({
    type: DELETE_INFO,
    payload: id
})