var fs = require('fs');
var hbs = require('handlebars');


var compileFile = function(path, compiler, callback){
	fs.readFile(path, function(err, data){
		if (!err){
			callback(compiler(data.toString()));
		} else {
			console.log(err);
		}
	});
};

var identity = function(arg){ return arg; };

compileFile('templates/partials/head.hbs', identity, function(template){

//	hbs.registerPartial('head', template);
});


compileFile('templates/partials/nav.hbs', hbs.compile, function(template){
	var items = {
		'items': [
			{'link':'index.html', 'title': 'home'},
			{'link':'about.html', 'title': 'about'},
		]
	};
//	hbs.registerPartial('nav', template(items));
});

compileFile('templates/index.hbs', hbs.compile, function(template){
		var data = {'title':'Home'};
	console.log(template(data));
//	console.log(template(data));

});
compileFile('templates/index.hbs', hbs.compile, function(template){
		var data = {'title':'About'};
//	console.log(template(data));

	console.log(template(data));

})
