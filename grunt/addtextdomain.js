/* jshint node:true */
// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
    main: {
        options: {
            textdomain: '<%= package.textdomain %>',
        },
        plugin: {
            files: {
                src: [
                    '<%= files.php %>'
                ],
            },
        },
    }
};


