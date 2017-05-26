// for dev only
(function () {
    'use strict';

    var express = require('express');
    var path = require('path');
    var bodyParser = require('body-parser');
    var fs = require('fs');
    var PythonShell = require('python-shell');

    var app = express();
    var publicPath = path.join(__dirname, '/');
    var port = 6431;

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(express.static(publicPath));

    app.post('/fileName', (req, res, next) => {
      var pyshell = new PythonShell('py/parser.py', { scriptPath: publicPath } );
      pyshell.send(req.body.url);
      pyshell.end(function (err) {
        if (err) throw err;
        console.log('finished');
      });
      res.end();
    });

    app.get('/pyPrint', (req, res) => {
      PythonShell.run('app/py/processing.py', { scriptPath: publicPath }, function (err, result) {
        if (err) throw err;
        var send = [];
        for(let i = 0; i < result.length - 1; i += 1) {
          send.push(result[i]);
        }

        fs.writeFile(path.join(__dirname, "app/js/data.js"), result[result.length - 1], function(err) {
          if(err) {
              return console.log(err);
          }
          console.log(__dirname);
          console.log("The file was saved!");
        });
        res.json(JSON.stringify(send));
      });
    });

    var server = app.listen(port, function () {
        console.log('Express server listening on port ' + server.address().port);
    });

    module.exports = app;

}());
