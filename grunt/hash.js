//https://github.com/gruntjs/grunt-contrib-compress
module.exports = function (grunt, options) {
    var file_name = 'themeisle-hash.json';
    grunt.task.registerMultiTask('hash', 'Creates "' + file_name + '"', function(){
        grunt.task.requires('deploy');
        grunt.task.run('cachebuster');
    });


    grunt.initConfig({
        hash: {
            target: {}
        },
        cachebuster: {
            default: {
                src: [ '**/*.css', '**/*.js', '**/*.php', '!node_modules/**/*', '!vendor/**/*', '!grunt/**/*', '!languages/**/*', '!tests/**/*', '!logs/**/*', '!' + file_name ],
                dest: file_name
            }
        }
    });
};