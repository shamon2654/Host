import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticate: false,
    user: null,
    token:null
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        LoadUserSucces(state, action) {
            state.isAuthenticate = true
           
            state.user = action.payload.user
            state.token =action.payload.token
          },
    }
})


export const { LoadUserSucces } = userSlice.actions
export default userSlice.reducer