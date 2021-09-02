import { apiCall } from './api/api'
import {
    REQUEST_LAUNCHYEAR_PENDING,
    REQUEST_LAUNCHYEAR_SUCCESS,
    REQUEST_LAUNCHYEAR_FAILED,
    REQUEST_LAUNCHDATA_PENDING,
    REQUEST_LAUNCHDATA_SUCCESS,
    REQUEST_LAUNCHDATA_FAILED,
    CHANGE_DATALIST
} from './constants'

export const setDataList = (type, value) => ({ type: CHANGE_DATALIST, payload: { type, value } })

export const requestLaunchYear = (dispatch) => {
    let apiUrl = `https://api.spaceXdata.com/v3/launches`;

    dispatch({ type: REQUEST_LAUNCHYEAR_PENDING })
    apiCall(apiUrl)
        .then(data => {
            const launchYears = data.map(({ launch_year }) => launch_year).filter(year => year > 2006);

            dispatch({ type: REQUEST_LAUNCHYEAR_SUCCESS, payload: launchYears })
        })
        .catch(error => dispatch({ type: REQUEST_LAUNCHYEAR_FAILED, payload: error }))
}

export const requestLaunchData = (dispatch, search) => {
    let apiUrl = `https://api.spaceXdata.com/v3/launches`;

    if (search.length) {
        apiUrl = `https://api.spaceXdata.com/v3/launches?${search[0].type}=${search[0].value}`;

        if (search.length > 1) {
            search.map(({ type, value }, idx) => {
                if (idx !== 0) {
                    apiUrl += `&${type}=${value}`;
                }
            })
        }
    }

    dispatch({ type: REQUEST_LAUNCHDATA_PENDING })
    apiCall(apiUrl)
        .then(data => {
            dispatch({ type: REQUEST_LAUNCHDATA_SUCCESS, payload: data })
        })
        .catch(error => dispatch({ type: REQUEST_LAUNCHDATA_FAILED, payload: error }))
}
