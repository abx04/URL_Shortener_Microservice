const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const UrlModel=require('../models/url');

let count=11000;

router.get('/:url',function (req,res,next) {
    let url=req.params.url;
    count++;
    UrlModel.findOne({original_url:url},function (err,result) {
       if (err)res.send(err);
       else if(res===null)next();
       else res.send(result);
    });
});

router.get('/:url',function(req,res){
    let url=req.param.url;
    let urlModel=new UrlModel({
            original_url:url,
            shortened_url:count
       });
    urlModel.save(function (err,urlModel) {
       if(err) res.send(err);
       else res.send(urlModel);

    });

});

module.exports=router;