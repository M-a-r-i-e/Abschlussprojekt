const express = require('express');
const app = express();
const compression = require('compression');
const apiRoutes = require('./api-routes.js');
const db = require ("./db.js");
app.use(express.json());
app.use(apiRoutes);
app.use('/static',express.static('static'));
app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening.");
});
