const express = require("express");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
// const cryptoRandomString = require("crypto-random-string");
// const multer = require("multer");
// const uidSafe = require("uid-safe");
// const alert = require("alert");

const app = express();

const items = require("./routes/api/items");
const projects = require("./routes/api/projects");
const admin = require("./routes/api/admin");
const auth = require("./routes/api/auth");
// -------------- production for heroku --------------------
let secrets;
if (process.env.NODE_ENV === "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("../secrets.json"); // in dev they are in secrets.json which is listed in .gitignore
}
let db = `mongodb+srv://${secrets.MONGO_USER}:${secrets.MONGO_PASS}@cluster0.wglsp.mongodb.net/portfolio?retryWrites=true&w=majority`;
//---------------  database setup ---------------------

const mongoose = require("mongoose");

// connect to mongo

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("mongodb is connected");
    })
    .catch((error) => {
        console.log("error by connecting to mogoDB", error);
    });

//---------------  database setup end  ---------------------

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "pubilc", "public")));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(compression());

const cookieSessionMiddleware = cookieSession({
    name: "session",
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 14,
});

//must be after cookiesession
app.use(cookieSessionMiddleware);

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("securetoken", req.csrfToken());
    next();
});

app.options("*", cors()); // include before other routes

app.use(admin);
app.use(auth);
app.use(items);
app.use(projects);

// serve static assets if in porductiuon

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app listening on port http://localhost:${PORT}`);
});
