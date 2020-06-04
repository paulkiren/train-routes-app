var Logger = {
    info: function (info) {
        console.info('Info: ', info);
    },
    warning: function (warning) {
        console.warn('Warning: ', warning);
    },
    error: function (error) {
        console.error('Error: ', error);
    }
};

module.exports = Logger;