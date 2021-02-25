import { ADD_INFO, DELETE_INFO, EDIT_INFO } from '../actionTypes';

const initialState = {
    info: [],
    users: []

};

const infoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_INFO: {
            return {
                ...state,
                info: [...state.info, action.payload]
            }
        }

        case DELETE_INFO: {
            return {
                ...state,
                info: state.info.filter(id => id != action.payload)
            }
        }

        case EDIT_INFO: {
            const { newInfo, id } = action.payload;
            return {
                ...state,
                info: state.info.filter(delid => delid != id).push(newInfo)

            }
        }

        default: 
            return state;
    }

}

export default infoReducer;