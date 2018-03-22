/* jshint node:true */
// https://github.com/mducharme/grunt-phpcbf

module.exports = {
    plugin: {
        options: {
            standard: 'phpcs.xml',
	        noPatch:false
        },
        files: {
            src:['<%= files.php %>']
        }
    }
};