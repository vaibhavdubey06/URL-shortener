
const shortid =require("shortid");
const URL=require('../models/url');
async function handleGenerateShortURL(req,res){
const shortId=shortid();
const body=req.body;
if(!body.url) return res.status(400).json({error:'url is required'})
await URL.create({
    shortId:shortId,
    redirectURL:body.url,
    visitHistory:[],

});
return res.json({id:shortID});
}
module.exports={
    handleGenerateShortURL,

};