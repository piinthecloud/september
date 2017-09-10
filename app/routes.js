var request = require('request');
var parser = require('xml2json');

module.exports = function(app) {

    app.get('/api/gifs', function(req, res) {
        res.sendfile('./data/gifs.json')
    });

    app.get('/api/cats', function(req, res) {
        request('http://thecatapi.com/api/images/get?format=xml&results_per_page=20', function (error, response, body) {
          if (!error && response.statusCode == 200) {
              var xml = body;
              var json = parser.toJson(xml)
              res.send(json)
          }
        })
    });

	app.get('/*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
