const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const UrlModel=require('../models/url');

let count=1000;

const url="mongodb://localhost/url";
mongoose.connect(url,function () {
    console.log('connected to: '+url)
});

router.get('/:url',function (req,res) {
   let url=req.params.url;
   count++;
   let urlModel=new UrlModel({
            original_url:url,
            shortened_url:count
       });

    res.send(urlModel.toString());
});

module.exports=router;