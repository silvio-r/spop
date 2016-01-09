# SmallPop

A lightweight small pop up widget with no dependencies, create notifications easily with this javascript plugin.<br>Playground in [Codepen](http://codepen.io/silvio-r/pen/jWmWXy).

## Basic

Include spop.js and spop.css in your page.

```html
<link href="spop.css" rel="stylesheet">
<!-- Even better, SamallPop is made with scss, @import to your style.scss -->
<script src="spop.js"></script>
```

and call it:

```javascript
spop('Default SmallPop');

spop('<h4 class="spop-title">Success</h4>I´m a success SmallPop', 'success');

spop('<strong>Warning pop</strong>', 'warning');

spop('<strong>Error Here!</strong>', 'error');
```


## Position

SmallPox has six differents positions: top-left, top-center,  top-right, bottom-left, bottom-center and bottom-right

```javascript
// top left example
spop({
	template: 'Position top left',
	position  : 'top-left',
	style: 'success'
});
```

In *mobile* (max-width:30em), all go down.


## Autoclose

Autoclose, to... close... automatically...

```javascript
spop({
	template: '3 seconds autoclose',
	autoclose: 3000
});
```


## Groups

There can only be one SmallPop visible from each group.

```javascript
spop({
	template: 'All fields are required!',
	group: 'submit-satus',
	style: 'error'
});

spop({
	template: 'Your information has been submitted',
	group: 'submit-satus',
	style: 'success'
	autoclose: 2000
});
```

## Callbacks

Do what you need onOpen and onClose

```javascript
spop({
	template: 'Please, close me.',
	onOpen: function () {
		document.body.style.background = "#fff";
	},
	onClose: function() {
		document.body.style.background = "";
		spop({
			template: 'Thank you!',
			style: 'success',
			autoclose: 2000
		});
	}
});
```


## Event

In your template you can call the close event, just add data-spop="close".

```javascript
spop('Got to <a href="#demo-defaults" data-spop="close">defaults</a>');
```


## Options

```javascript
spop({
	template  : null,// string required. Without it nothing happens!
	style     : 'info',// success, warning or error
	autoclose : false,// miliseconds
	position  : 'top-right',// top-left top-center bottom-left bottom-center bottom-right
	icon      : true,// or false
	group     : false,// string, add a id reference
	onOpen    : funtion() { },
	onClose   : funtion() { }
});
```


### Browser support
Chrome, Firefox, IE 11-10-9 (9 no animations), Android Browser, Chrome for Android, Safari, iOS Safari

### License

MIT License

----

Created by Sílvio Rosa • Follow me on [twitter](https://twitter.com/silvior_) for updates.
