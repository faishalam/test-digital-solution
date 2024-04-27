import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    car: [],
    carById : {}
}

export const carSlice = createSlice({
    name: 'car',
    initialState: initialState,
    reducers: {
        setCar: (state, action) => {
            state.car = action.payload
        },
        setCarById: (state, action) => {
            state.carById = action.payload
        }
    }
})

export const { setCar, setCarById } = carSlice.actions

export default carSlice.reducer