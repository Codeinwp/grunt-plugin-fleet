/* jshint node:true */
// https://github.com/SaschaGalley/grunt-phpcs
module.exports = {
    options: {
        ignoreExitCode: true
    },
    plugin: {
        options: {
            standard: 'phpcs.xml',
            reportFile: '<%= paths.logs %>phpcs.log',
            extensions: 'php'
        },
        src: [
            '<%= files.php %>'
        ]
    }
};