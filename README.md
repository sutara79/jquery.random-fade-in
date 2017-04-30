# jquery.random-fade-in

[![Build Status](https://travis-ci.org/sutara79/jquery.random-fade-in.svg?branch=master)](https://travis-ci.org/sutara79/jquery.random-fade-in)
[![Coverage Status](https://coveralls.io/repos/github/sutara79/jquery.random-fade-in/badge.svg?branch=master)](https://coveralls.io/github/sutara79/jquery.random-fade-in?branch=master)
[![dependencies Status](https://david-dm.org/sutara79/jquery.random-fade-in/status.svg)](https://david-dm.org/sutara79/jquery.random-fade-in)

jQuery plugin to fade-in at random.

![Sample image](sample/image.png)


## Demo
https://sutara79.github.io/jquery.random-fade-in/


## Install
- [GitHub](https://github.com/sutara79/jquery.random-fade-in): Clone or download.
- [npm](https://www.npmjs.com/package/jquery.random-fade-in): `npm i jquery.random-fade-in`
- [CDN (jsDelivr)](http://www.jsdelivr.com/projects/jquery.random-fade-in):
    ```javascript
    <script src="https://cdn.jsdelivr.net/jquery.random-fade-in/1.3.0/jquery.random-fade-in.min.js"></script>
    ```
  You can load jQuery and this plugin with single HTTP request.  
  See [jsDelivr's document](https://github.com/jsdelivr/jsdelivr#load-multiple-files-with-single-http-request)
    ```javascript
    <script src="https://cdn.jsdelivr.net/g/jquery@3.2.1,jquery.random-fade-in@1.3.0"></script>
    ```


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
