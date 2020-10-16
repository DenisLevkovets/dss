import constants from '../constants';

function request(authActionType) {
    return { type: authActionType + constants.requestStatus.REQUEST }
}

function success(authActionType, payload) {
    return { type: authActionType + constants.requestStatus.SUCCESS , payload}
}

function failure(authActionType, error) {
    return { type: authActionType + constants.requestStatus.FAILURE, error }
}

export default {request, success,  failure};
