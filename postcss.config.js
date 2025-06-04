const postcss = require('postcss');
const postcssSass = require('@csstools/postcss-sass');

module.exports = cfg => {
    const dev = cfg.env === 'development';
    const scss = cfg.file.extname === '.scss';

    return {
        plugins: [
            postcssSass(/* pluginOptions */),
            require('cssnano')({
                preset: 'default',
            }),
            require("css-declaration-sorter")({
                order: 'alphabetical',
            }),
            require("postcss-discard-comments")
        ],
        syntax: 'postcss-scss',
        map: dev ? { inline: false } : false,
        parser: scss ? 'postcss-scss' : false
    }
};
