/*!
 *  smallPop Docs
 */

(function () {
	'use strict';

	var docs = {};

	docs.basic = (function() {

		$('code-markup').innerHTML = '' +
		 	'&lt;link href="spop.css" rel="stylesheet"&gt;\n' +
		 	'&lt;!-- Even better, SamallPop is made with scss,\n' +
		 	'     @import to your style.scss --&gt;\n' +
			'&lt;script src="spop.js"&gt;&lt;/script&gt;';

		$('btn-default-pop').addEventListener('click', function() {
			spop('Default SmallPop');
		}, false);

		$('btn-success-pop').addEventListener('click', function() {
			spop('<h4 class="spop-title">Success</h4>Iˈm a success SmallPop', 'success');
		}, false);

		$('btn-warning-pop').addEventListener('click', function() {
			spop('Warning SmallPop', 'warning');
		}, false);

		$('btn-error-pop').addEventListener('click', function() {
			spop('<strong>Error Here!</strong>', 'error');
		}, false);

		$('code-basic').innerHTML = "" +
			"spop('Default SmallPop');\n" +
			"\n" +
			"spop('&lt;h4 class=\"spop-title\">Success&lt;/h4>Iˈm a success SmallPop', 'success');\n" +
			"\n" +
			"spop('Warning SmallPop', 'warning');\n" +
			"\n" +
			"spop('&lt;strong&gt;Error Here!&lt;/strong&gt;', 'error');";
	}());

	docs.position = (function() {
		$('btn-top-left').addEventListener('click', function() {
			spop({
				template: 'Position top left',
				position  : 'top-left',
				style: 'success'
			});
		}, false);

		$('code-position').innerHTML = "" +
			"// top left example\n" +
			"spop({\n" +
			"	template: 'Position top left',\n" +
			"	position  : 'top-left',\n" +
			"	style: 'success'\n" +
			"});'";

		$('btn-top-center').addEventListener('click', function() {
			spop({
				template: 'Position top center',
				position  : 'top-center'
			});
		}, false);

		$('btn-top-right').addEventListener('click', function() {
			spop({
				template: 'Position top right',
				position  : 'top-right'
			});
		}, false);

		$('btn-bottom-left').addEventListener('click', function() {
			spop({
				template: 'Position bottom left',
				position  : 'bottom-left',
				style: 'error'
			});
		}, false);

		$('btn-bottom-center').addEventListener('click', function() {
			spop({
				template: 'Position bottom center',
				position  : 'bottom-center'
			});
		}, false);

		$('btn-bottom-right').addEventListener('click', function() {
			spop({
				template: 'Position bottom right',
				position  : 'bottom-right'
			});
		}, false);
	}());

	docs.autoclose = (function() {
		$('btn-autoclose-pop').addEventListener('click', function() {
			spop({
				template: '3 seconds autoclose',
				autoclose: 3000
			});
		}, false);

		$('code-autoclose-pop').innerHTML = "" +
			"spop({\n" +
			"	template: '3 seconds autoclose',\n" +
			"	autoclose: 3000\n" +
			"});";
	}());

	docs.groups = (function() {
		$('btn-groups-1').addEventListener('click', function() {
			spop({
				template: 'All fields are required!',
				group: 'submit-satus',
				style: 'error'
			});
		}, false);

		$('btn-groups').addEventListener('click', function() {
			spop('Nothing here...');
		}, false);

		$('btn-groups-2').addEventListener('click', function() {
			spop({
				template: 'Your information has been submitted.',
				group: 'submit-satus',
				style: 'success',
				autoclose: 2000,
			});
		}, false);

		$('code-groups').innerHTML = "" +
			"spop({\n" +
			"	template: 'All fields are required!',\n" +
			"	group: 'submit-satus',\n" +
			"	style: 'error'\n" +
			"});\n" +
			"\n" +
			"spop('Nothing here...');\n" +
			"\n" +
			"spop({\n" +
			"	template: 'Your information has been submitted',\n" +
			"	group: 'submit-satus',\n" +
			"	style: 'success'\n" +
			"	autoclose: 2000\n" +
			"});";
	}());

	docs.callbacks = (function() {
		$('btn-callbacks').addEventListener('click', function() {
			spop({
				template: 'Please, close me.',
				style:'warning',
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
		}, false);

		$('code-callbacks').innerHTML = "" +
			"spop({\n" +
			"	template: 'Please, close me.',\n" +
			"	style:'warning',\n" +
			"	onOpen: function () {\n" +
			"		document.body.style.background = \"#fff\";\n" +
			"	},\n" +
			"	onClose: function() {\n" +
			"		document.body.style.background = \"\";\n" +
			"		spop({\n" +
			"			template: 'Thank you!',\n" +
			"			style: 'success',\n" +
			"			autoclose: 2000\n" +
			"		});\n" +
			"	}\n" +
			"});\n";
	}());

	docs.events = (function() {
		$('btn-event').addEventListener('click', function() {
			spop('Got to <a href="#demo-defaults" data-spop="close">defaults</a>');
		}, false);

		$('code-event').innerHTML = "" +
			"spop('Got to &lt;a href=\"#demo-defaults\" data-spop=\"close\"&gt;defaults&lt;/a&gt;');";
	}());

	docs.defaults = (function() {

		$('btn-defaults').addEventListener('click', function() {

			spop.defaults = {
				style:'error',
				autoclose: 5000,
				position: 'top-left'
			};

			spop('Defaults changed! See the others examples.');
		}, false);

		$('btn-defaults-reset').addEventListener('click', function() {

			spop.defaults = {};

			spop('Defauls restored');
		}, false);

		$('code-defaults').innerHTML = "" +
			"spop.defaults = {\n" +
			"	style     : 'error',\n" +
			"	autoclose : 5000,\n" +
			"	position  : 'top-left'\n" +
			"};\n\n" +
			"spop('Defaults changed! See the others examples.');\n";
	}());

	docs.options = (function() {
		$('code-options').innerHTML = "" +
			"spop({\n" +
			"	template  : null,// string required. Without it nothing happens!\n"+
			"	style     : 'info',// error or success\n"+
			"	autoclose : false,// miliseconds\n"+
			"	position  : 'top-right',// top-left top-center bottom-left bottom-center bottom-right\n"+
			"	icon      : true,// or false\n"+
			"	group     : false,// string, add a id reference \n"+
			"	onOpen    : funtion() { },\n"+
			"	onClose   : funtion() { }\n" +
			"});";
	}());


	docs.removeAllPops = (function() {
		var title = $$('.title');
		var pops;
		var popsC;

		var removePops = function() {
			pops  = $$('.spop');
			popsC = $$('.spop-container');


			forAll(pops, function(elm) {
				removeClass(elm, 'spop--in');
			});

			setTimeout(function () {
				forAll(popsC, function(elm) {
					elm.parentNode.removeChild(elm);
				});
			}, 300);
		};

		forAll(title, function(elm) {
			elm.addEventListener('click', removePops, false);
		});
	}());


	// helpers
		function $(el, con) {
			return typeof el === 'string'? (con || document).getElementById(el) : el || null;
		}

		function $$(el, con) {
			return typeof el === 'string'? (con || document).querySelectorAll(el) : el || null;
		}

		function forAll(arr, fn) {
			for (var i = 0; i < arr.length; i++) {
				fn.call( i, arr[i]);
			}
		}

		function removeClass(el, className) {
			if (el.classList) {
				el.classList.remove(className);
			}
			else {
				el.className = el.className.replace(new RegExp('(^|\\b)' +
								className.split(' ').join('|') +
								'(\\b|$)', 'gi'), ' ');
			}
		}

}());
