/* jshint node:true */
// https://github.com/mducharme/grunt-phpcbf

module.exports = {
    plugin: {
        options: {
            standard: 'phpcs.xml'
        },
        files: {
            src:['<%= files.php %>']
        }
    }
};