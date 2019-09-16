//jshint esversion:6

// PER FILE NASCOSTI
require('dotenv').config();
// librerie express,body-parser, ejs
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// mongoose database
const mongoose = require("mongoose");
// creare sessioni (cookies, login ecc)
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
// strategia del passport.js (google,facebook...) vai a passport.js su google
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// funzione creata nel pacchetto npm per
const findOrCreate = require('mongoose-findorcreate');

// PER UTILIZZARE EJS ED EXPRESS
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// per usare la session
app.use(session({
  secret: ,
  resave: false,
  saveUninitialized: false
}));
// per usare le funzioni di passport (vedi su google a "passport.js")
app.use(passport.initialize());
app.use(passport.session());
// per connettere mongoose e creare un nuovo database
// mongoose.connect("mongodb://localhost:27017/NOMEDATABASE",{useNewUrlParser: true});
// mongoose.set("useCreateIndex", true);

// CREARE GLI SCHEMI
// CREARE EVENTUALI PLUGIN PER LO SCHEMA ES:
// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

// CREARE L'OGGETTO ES:
// const User = new mongoose.model("User", userSchema);

// SELEZIONARE LA STRATEGIA ES:
// passport.use(User.createStrategy());

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
//
// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/secrets",
//     userProfileURL: "https://googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({
//       googleId: profile.id
//     }, function(err, user) {
//       return cb(err, user);
//     });
//   }
// ));









app.listen(3000, function() {
  console.log("server is running on port 3000");
});
