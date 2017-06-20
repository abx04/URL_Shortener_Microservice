const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const fs=require('fs');

const UrlModel=require('../models/url');

let count=JSON.parse(fs.readFileSync(__dirname+'/../count.json').toString()).count;

router.get('/:url',function (req,res,next) {
    let url=req.params.url;
    UrlModel.findOne({original_url:url},function (err,result) {
       if (err)res.send(err);
       else if(!result) next();
       else {
           let response={
               original_url:result.original_url,
               shortened_url:result.shortened_url
           };
           res.send(response);
       }
    });
});

router.get('/:url',function(req,res){
    let url=req.params.url;
    let urlModel=new UrlModel({
            original_url:url,
            shortened_url:count
       });

    count++;
    fs.writeFile(__dirname+'/../count.json','{\"count\":'+count+'}')

    urlModel.save(function (err,result) {
       if(err) res.send(err);
       else res.send(urlModel);

    });


});

module.exports=router;