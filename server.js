const express=require('express');
const app=express();
const mongoose=require('mongoose');

const url="mongodb://localhost/url";
mongoose.Promise=global.Promise;

mongoose.connect(url,function () {
    console.log('connected to: '+url)
});

const urlRouter=require('./routes/url_router');
const urlRedirect=require('./routes/url_redirect');

app.use(express.static(__dirname+'/public'));

app.get('/',function (req,res) {
    res.redirect('/home.html');
});

app.use('/new',urlRouter);
app.use('/',urlRedirect)

app.listen(8080);