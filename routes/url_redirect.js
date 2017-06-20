const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

const UrlModel=require('../models/url');

router.get('/:url',function (req,res) {
    let url=req.params.url;
    UrlModel.findOne({shortened_url:url},function (err,result) {
        if(err)res.send(err);

        else{
            if(result===null)
                res.send('url mismatch');
            else
            res.redirect(result.original_url);
        }
    })
});

module.exports=router;
