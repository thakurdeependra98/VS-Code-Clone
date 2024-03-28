const { isUtf8 } = require('buffer');
var express = require('express');
var router = express.Router();
const fs = require('fs')
const folder = "Files"

router.get('/', function(req, res, next) {
fs.readdir(`./${folder}`,{withFileTypes:true}, function(err,files){
  res.render('index',{folder,files})
} )
 router.get("/bringback",function(req,res,next){
  res.redirect("back")
 })
 
})
router.get('/createfile', function(req, res, next) {
  fs.writeFile(`./${folder}/${req.query.file}`,"", function(err){
    
    res.redirect("/")
  } )
   })

     
   router.get('/createfolder', function(req, res, next) {
    fs.mkdir(`./${folder}/${req.query.folder}`, function(err){
      
      res.redirect("/")
    } )
     })


   router.get('/delete/folder/:filename', function(req, res, next){
    fs.rmdir(`./${folder}/${req.params.filename}`,function(err){
      res.redirect("/")
    })
    
    
       })
       

   router.get('/delete/file/:filename', function(req, res, next){
fs.unlink(`./${folder}/${req.params.filename}`,function(err){
  res.redirect("/")
})


   })
 
router.get('/file/:filename', function(req, res, next) {
   
  fs.readdir(`./${folder}`,{withFileTypes:true}, function(err,files){
    fs.readFile(`./${folder}/${req.params.filename}`,"Utf8",function(err,data){
      res.render('fileopen',{folder,files,filename:req.params.filename,filedata:data})

    })


})
}) 
 
router.post('/filesave/:filename', function(req, res, next) {
   
 fs.writeFile(`./${folder}/${req.params.filename}`,req.body.filedata.trim(),function(err){
  res.redirect("back")
 })



}) 
router.get('/rename/:filename', function(req, res, next){
  fs.rename(`./${folder}/${req.params.filename}`,`./${folder}/${req.query.rename}`,function(err){
    res.redirect("/")
  })
     })

    


module.exports = router;

