const express=require('express');
const app=express();
const mongoose=require('mongoose');

const url="mongodb://url_free_code_camp:freecodecamp@url-shard-00-00-cyjn8.mongodb.net:27017,url-shard-00-01-cyjn8.mongodb.net:27017,url-shard-00-02-cyjn8.mongodb.net:27017/Url?ssl=true&replicaSet=Url-shard-0&authSource=admin";
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
app.use('/',urlRedirect);

app.listen(8080);