/* jshint node:true */
// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
    plugin: {
        options: {
            domainPath: '<%= paths.languages %>',
            potFilename: '<%= package.textdomain %>.pot',
            potHeaders: {
                poedit: true,
                'report-msgid-bugs-to': '<%= package.pot.reportmsgidbugsto %>',
                'language-team': '<%= package.pot.languageteam %>',
                'last-translator': '<%= package.pot.lasttranslator %>'
            },
            type: 'wp-plugin'
        },
    },
};