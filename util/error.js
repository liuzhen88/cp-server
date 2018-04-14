module.exports = function (status, error, debugMsg) {
    error.status = status;
    error.debugMsg = debugMsg;
    return error;
};