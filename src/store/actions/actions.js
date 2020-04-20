import axios from "axios"
import * as actionTypes from "./actionTypes"

const url = "https://covid19.mathdro.id/api"

export const setData = (fetchedData) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESSFULL,
        fetchedData: fetchedData
    }
}

export const fetchData = (country) => {
    let changeableUrl = url
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }
    return dispatch => {
        axios.get(changeableUrl).then(response => {
            dispatch(setData(response.data))
        })
            .catch(error => {
                console.log(error)

            })
    }
}

export const fetchDailyData = () => {
    return dispatch => {
        axios.get(`${url}/daily`)
            .then(response => {
                const modifiedData = response.data.map((dailyData) => ({
                    confirmed: dailyData.confirmed.total,
                    deaths: dailyData.deaths.total,
                    date: dailyData.reportDate
                }))
                dispatch(fetchedDailyDataSuccess(modifiedData))
            })
            .catch(error => {
                console.log(error)

            })
    }

}
export const fetchedDailyDataSuccess = (modifiedData) => {
    return {
        type: actionTypes.FETCH_DAILY_DATA_SUCCESS,
        modifiedData: modifiedData
    }

}

export const fetchCountries = () => {
    return dispatch => {
        axios.get(`${url}/countries`)
            .then(response => {
                dispatch(fetchCountriesSuccess(response.data))
            })
            .catch(error => {
                console.log(error)
                
            })
    }
}

export const fetchCountriesSuccess = (country) => {
    return {
        type: actionTypes.FETCH_COUNTRY_SUCCES,
        country: country
    }
}