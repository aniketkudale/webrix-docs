import {getParameters} from 'codesandbox/lib/api/define';
import pkg from './files/package.json';
import index from '!raw-loader!./files/index.js';
import html from '!raw-loader!./files/index.html';
import style from '!raw-loader!./files/style.scss';
import colors from '!raw-loader!../../../../resources/styles/colors.scss';

// Convert the SCSS variables to a JS object
const _colors = [...colors.matchAll(/(\$[\w-]+)\: (\#\w+)/g)].reduce((obj, [_, name, value]) => ({...obj, [name]: value}), {});

export default ({code, id}) => getParameters({
    files: {
        'package.json': {
            content: pkg
        },
        'index.js': {
            content: index.replace('{{id}}', id) // Set the example's ID so that the styles are properly applied
        },
        'index.html': {
            content: html
        },
        'Example.jsx': {
            content: code,
        },
        'style.scss': {
            content: style.replace(/\$[\w-]+/g, key => _colors[key]), // Replace every color variable with its value
        }
    }
});