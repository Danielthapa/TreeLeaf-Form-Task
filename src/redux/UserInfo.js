import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { 
        name: "daniel",
        email: "dtdaniel27@gmail.com",
        phone: "9814011947",
        dob: "10 feb, 1997",
        address: {
            city: "birtamod",
            district: "jhapa",
            province: "mechi",
            country: "nepal"
        }  
    }
]

const userInfo = createSlice({
    name: "info",
    initialState,
    reducers: {
        infoAdded(state, action) {
            state.push(action.payload);
        }
    }
})

export const { infoAdded } = userInfo.actions;

export default userInfo