import { combineReducers } from 'redux';

function success(state = false, action) {
    switch (action.type) {
        case 'RESET_SUCCESS':
            return action.success;
        default:
            return state;
    }
}
function successMessage(state = null, action) {
    switch (action.type) {
        case 'RESET_SUCCESS_MESSAGE':
            return action.successMessage;
        default:
            return state;
    }
}

function loading(state = false, action) {
    switch (action.type) {
        case 'RESET_LOADING':
            return action.loading;
        default:
            return state;
    }
}
function loadingMessage(state = null, action) {
    switch (action.type) {
        case 'RESET_LOADING_MESSAGE':
            return action.loadingMessage;
        default:
            return state;
    }
}

function error(state = false, action) {
    switch (action.type) {
        case 'RESET_ERROR':
            return action.error;
        default:
            return state;
    }
}
function errorMessage(state = null, action) {
    switch (action.type) {
        case 'RESET_ERROR_MESSAGE':
            return action.errorMessage;
        default:
            return state;
    }
}

function retrieved(state = null, action) {
    switch (action.type) {
        case 'RESET_RETRIEVED':
            return action.retrieved;
        default:
            return state;
    }
}



export default combineReducers({
    success,
    successMessage,
    loading,
    loadingMessage,
    error,
    errorMessage,
    retrieved
});
