// https://github.com/felthy/grunt-cachebuster
module.exports = {
    default: {
        src: [ '<%= files.php %>', '<%= files.css %>', '<%= files.js %>', '<%= hash.exclude %>', '!' + '<%= hash.file_name %>' ],
        dest: '<%= hash.file_name %>'
    }
};
