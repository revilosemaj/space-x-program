import {
    REQUEST_LAUNCHDATA_PENDING,
    REQUEST_LAUNCHDATA_SUCCESS,
    REQUEST_LAUNCHDATA_FAILED,
    CHANGE_DATALIST,
    REQUEST_LAUNCHYEAR_PENDING,
    REQUEST_LAUNCHYEAR_SUCCESS,
    REQUEST_LAUNCHYEAR_FAILED
} from './constants';

const addSearchItem = (prevSearch, newSearch) => {
    const existingSearch = prevSearch.find(search => search.type === newSearch.type);

    if (existingSearch) {
        return prevSearch.map(search => (
            search.type === newSearch.type ? { ...search, type: newSearch.type, value: newSearch.value }
                : search
        ))
    }

    return [...prevSearch, { ...newSearch }]
}

const initialStateYear = {
    launchYear: [],
    launchYearIsPending: true,
    launchYearError: ''
}

export const requestLaunchYear = (state = initialStateYear, action = {}) => {
    switch (action.type) {
        case REQUEST_LAUNCHYEAR_PENDING:
            return { ...state, launchYearIsPending: true }
        case REQUEST_LAUNCHYEAR_SUCCESS:
            return { ...state, launchYear: action.payload, launchYearIsPending: false }
        case REQUEST_LAUNCHYEAR_FAILED:
            return { launchYearError: action.payload }
        default:
            return state
    }
}

const initialStateSearch = {
    search: []
}

export const searchDataList = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_DATALIST:
            return { ...state, search: addSearchItem(state.search, action.payload) }
        default:
            return state
    }
}

const initialLaunchData = {
    launchData: [],
    launchDataIsPending: true,
    launchDataError: ''
}

export const requestLaunchData = (state = initialLaunchData, action = {}) => {
    switch (action.type) {
        case REQUEST_LAUNCHDATA_PENDING:
            return { ...state, launchDataIsPending: true }
        case REQUEST_LAUNCHDATA_SUCCESS:
            return { ...state, launchData: action.payload, launchDataIsPending: false }
        case REQUEST_LAUNCHDATA_FAILED:
            return { launchDataError: action.payload }
        default:
            return state
    }
}
