/**
 * https://github.com/gruntjs/grunt-contrib-copy
 */

var ignore = require('ignore');

module.exports = function (grunt, options) {
	return {
		deploy: {
			files: [{
				src: ['**'],
				dest: 'dist/',
				filter: function (filepath) {
					var unixifyPath = function (filepath) {
						var isWindows = process.platform === 'win32';
						return isWindows ? filepath.replace(/\\/g, '/') : filepath;
					};

					filepath = unixifyPath(filepath);

					var distignore = grunt.file.read('.distignore').split(/\r|\n/);
					var ig = ignore().add( distignore );

					if ( ig.ignores( filepath ) ) {
						return false;
					}

					return true;
				}
			}]
		}
	};
};