const path = require("path")
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create();
const session = require("express-session");
const routes = require("./controllers");
const sequelize = require("./config/connection")
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();

//set up our session
const sess = {
    secret: "miso ramen",
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
    db: sequelize
})
}

//set up handlebars
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

//set up our session
app.use(session(sess));

//standard middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

//set up our routing
app.use(routes)

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });;
});