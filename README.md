# jquery.random-fade-in

[![npm version](https://img.shields.io/npm/v/jquery.random-fade-in.svg)](https://www.npmjs.com/package/jquery.random-fade-in)
[![Build Status](https://travis-ci.org/sutara79/jquery.random-fade-in.svg?branch=master)](https://travis-ci.org/sutara79/jquery.random-fade-in)

jQuery plugin to fade-in at random.

![Sample image](sample/image.png)


## Demo
https://sutara79.github.io/jquery.random-fade-in/


## Install
- [GitHub](https://github.com/sutara79/jquery.random-fade-in): Clone or download.
- [npm](https://www.npmjs.com/package/jquery.random-fade-in): `npm i jquery.random-fade-in`
- CDN ([jsDelivr](https://github.com/jsdelivr/jsdelivr#usage)):
    - jquery.random-fade-in.min.js: [v1.3.3](https://cdn.jsdelivr.net/npm/jquery.random-fade-in@1.3.3/dist/jquery.random-fade-in.min.js)


## Usage
###### HTML
```html
<div class="box-container">
  <div><!-- Wrapper (Required) -->
    <p>foo</p><!-- Target to fade-in -->
  </div>
  <div>
    <p>bar</p>
  </div>
  <div>
    <p>baz</p>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="jquery.random-fade-in.min.js"></script>
```

###### CSS
```css
.box-container div p {
  display: none; /* Required */
}
```

###### JavaScript
```javascript
$('.box-container').randomFadeIn();
```


## Option
|name|type|default|description|
|--|--|--|--|
|[1st arg](http://sutara79.github.io/jquery.random-fade-in/#duration)|string, number|`'slow'`|Duration. Same to [jQuery ".fadeIn()"](http://api.jquery.com/fadeIn/).|
|[2nd arg](http://sutara79.github.io/jquery.random-fade-in/#no-repeat)|boolean|`true`|Whether to repeat.|


## Compatibility
- jQuery: >=3.0.0 ([because of XSS vulnerability](https://nodesecurity.io/advisories/jquery_xss))
- Browser: Chrome58, Firefox52, IE11, Edge14


## License
[MIT](https://www.opensource.org/licenses/mit-license.php)


## Author
[Yuusaku Miyazaki](http://d.hatena.ne.jp/sutara_lumpur/20120421/1335009088)
( <toumin.m7@gmail.com> )
