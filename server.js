const express = require('express');
const cors = require('cors');
const path = require('path');
const hbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const passportConfig = require('./config/passport');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

app.use(session({ secret: 'costam' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/userprofile', userRoutes);


app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', (req, res) => {
  res.status(404).render('notFound');
});

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});
