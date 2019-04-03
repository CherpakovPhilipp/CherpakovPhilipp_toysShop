const builder = require('./elementBuilder');
const content = `<h1>Here will be main content</h1>
                 <img src="https://resize.indiatvnews.com/en/centered/newbucket/715_431/2018/03/h6-1521531233.jpg" alt="content image"/>`;

module.exports = builder('main', content, 'main_block');