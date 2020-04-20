import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../../shared/utility"

const initialState = {
    fetchedData: null,
    dailyData: [{ confirmed: '' }],
    countryNmae: []
}

const setData = (state, action) => {
    return updateObject(state, {
        fetchedData: {
            confirmed: action.fetchedData.confirmed,
            recovered: action.fetchedData.recovered,
            deaths: action.fetchedData.deaths,
            lastUpdate: action.fetchedData.lastUpdate
        }



    })
}

const fetchDailyDataSuccess = (state, action) => {
    return updateObject(state, {
        dailyData: action.modifiedData

    })
}
const fetchedCountriesSuccess = (state, action) => {
    const success = action.country.countries.map((country) => country.name)
    return updateObject(state, {
        countryNmae: success
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESSFULL: return setData(state, action)
        case actionTypes.FETCH_DAILY_DATA_SUCCESS: return fetchDailyDataSuccess(state, action)
        case actionTypes.FETCH_COUNTRY_SUCCES: return fetchedCountriesSuccess(state, action)
        default: return state
    }

}
export default reducer