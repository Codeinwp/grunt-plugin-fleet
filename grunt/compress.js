//https://github.com/gruntjs/grunt-contrib-compress
module.exports = function (grunt, options) {
    return {
        main: {
            options: {
                archive: '<%= package.name %>.zip',
            }
            ,
            files: [
                {
                    cwd: '.',
                    src: ['**','!<%= package.name %>.zip'],
                    dest: '<%= package.name %>/',
                    filter: function (filepath) {
                        // var exclude = grunt.file.read('.distignore');
                        //console.log(exclude);
                        var cwd = grunt.file.read('.distignore').split(/\r|\n/);
                        cwd = cwd.filter(function(e){return e});
                        console.log(filepath);
                        for(index in cwd){
                            var file = cwd[index];
                            if (filepath.indexOf(file) === 0 ){
                                return false;
                            }
                        }
                        return true;
                    },
                },
            ],
        }
    };
};/**
 * Created by mariu on 14/03/2017.
 */
