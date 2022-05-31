import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('home');
});

// custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
    })

    // custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
    })

app.listen(3000);
