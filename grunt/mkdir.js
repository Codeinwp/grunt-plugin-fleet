/* jshint node:true */
// https://github.com/rubenv/grunt-mkdir
module.exports = {
    logs: {
        options: {
            create: ['logs']
        }
    },
    dist: {
        options: {
            create: ['dist']
        }
    },
    artifact: {
        options: {
            create: ['artifact']
        }
    }
};