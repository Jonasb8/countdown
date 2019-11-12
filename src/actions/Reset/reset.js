export function success(success) {
    return { type: 'RESET_SUCCESS', success }
}
export function successMessage(successMessage) {
    return { type: 'RESET_SUCCESS_MESSAGE', successMessage }
}


export function loading(loading) {
    return { type: 'RESET_LOADING', loading }
}
export function loadingMessage(loadingMessage) {
    return { type: 'RESET_LOADING_MESSAGE', loadingMessage }
}


export function error(error) {
    return { type: 'RESET_ERROR', error }
}
export function errorMessage(errorMessage) {
    return { type: 'RESET_ERROR_MESSAGE', errorMessage }
}

export function retrieved(retrieved) {
    return { type: 'RESET_RETRIEVED', retrieved }
}


export function reset(reset){

    return function(dispatch) {

        dispatch(success(true));
    }
}
