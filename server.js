const express=require('express');
const app=express();

const urlRouter=require('./routes/url_router');

app.use(express.static(__dirname+'/public'));

app.get('/',function (req,res) {
    res.redirect('/home.html');
});

app.use('/new',urlRouter);

app.listen(8080);