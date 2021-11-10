const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/moveis',function(req,res){
let move=["ra-one","gunda","bagigar"]
     res.send(move)
 })
router.get('/moveis/:index',function(req,res){
    let move=["ra-one","gunda","bagigar"]
   // console.log(req.params)
    let value=req.params.index
    let movieAtIndex=move[value]
    console.log(value)
    if(move.length<value){
        res.send("use a valid index")
    }else{
    res.send(movieAtIndex)
    }
})
router.get('/flim',function(req,res){
   let fli= [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }]
       res.send(fli)
})

router.get('/flim/:flimId',function(req,res){
    let fli= [ {
         id: 1,
         name: "The Shining"
        }, {
         id: 2,
         name: "Incendies"
        }, {
         id: 3,
         name: "Rang de Basanti"
        }, {
         id: 4,
         name: "Finding Demo"
        }]
        let value=req.params.flimId
        console.log(value)
        const flim=fli.filter(x => x.id == value)
console.log(flim)
       //if(flim.length === 0){
        //   res.send("not found")
      // }else{
         //  res.send(flim[0].movies)
       //}
       flim.length == 0 ? res.send("not found") : res.send(flim[0].name)
 })
module.exports = router;