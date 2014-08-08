# jquery.random-fade-in
A jQuery plugin for displaying an item by fade-in at random.


## Demo
http://usamimi.info/~sutara/sample/random-fade-in/

## JSDoc
http://usamimi.info/~sutara/sample/random-fade-in/jsdoc/


## Usage
###### HTML
``` html
<div id="boxset01">
	<div><img src="..."></div>
	<div><img src="..."></div>
	<div><img src="..."></div>
</div>
<script src="jquery.randomFadeIn.0.0.js"></script>
```

###### jQuery
``` javascript
$('#boxset01').randomFadeIn('slow');
```


## Option
you can set some properties of this plugin like following.  
(下記のようにオプションを指定できます。)

``` javascript
$('#boxset3').randomFadeIn(500, false);
```

- - -
### 1st argument (duration)
You can use same parameters for jQuery "fadeIn()".
###### Initial value
``` javascript
'slow'
```

- - -
### 2nd argument (is repeat?)
You can control whether it is repeated.

###### Initial value
``` javascript
true
```

## Author
Yuusaku Miyazaki (宮崎 雄策)

* [Mail](toumin.m7@gmail.com)
* [Blog](http://d.hatena.ne.jp/sutara_lumpur/20120421/1335009088)


## License
[MIT License](http://www.opensource.org/licenses/mit-license.php)
