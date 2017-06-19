const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const UrlModel=require('../models/url');

let count=11000;

router.get('/:url',function (req,res) {
    let url=req.params.url;
    count++;
    let urlModel=new UrlModel({
            original_url:url,
            shortened_url:count
       });
    urlModel.save(function (err,urlModel) {
       if(err) res.send(err);
       else res.send(urlModel);

    });

    //res.send(urlModel.toString());
});

module.exports=router;