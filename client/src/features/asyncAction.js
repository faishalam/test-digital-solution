import { heroService } from "../services/Hero";
import { setCar, setCarById } from "./carSlice";


export const getAll = (params) => {
    return async (dispatch) => {
        try {
            let response;

            if(!params) {
                response = await heroService.get("/car")
            }
            
            if(params) {
                response = await heroService.get(`/car?search=${params.search}`)
            }

            if (response.data !== null) {
                dispatch(setCar(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteCar = (id) => {
    return async (dispatch) => {
        try {
            await heroService.delete(`/car/${id}`)
            dispatch(getAll())
        } catch (error) {
            console.log(error)
        }
    }
}

export const addCar = (form) => {
    return async (dispatch) => {
        try {
            const response = await heroService.post("/car", form)

            if (response.data !== null) {
                dispatch(getAll())
            }

        } catch (error) {
            throw error.response.data.message
        }
    }
}

export const getById = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.get(`/car/${id}`)

            if (response.data !== null) {
                dispatch(setCarById(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateCar = (id, form) => {
    return async (dispatch) => {
        try {
            const response = await heroService.put(`/car/${id}`, form)

            if (response.data !== null) {
                dispatch(getAll())
            }
        } catch (error) {
            throw error.response.data.message
        }
    }
}