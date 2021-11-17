//const bookModel=require("./bookModal")
const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
    bookName:{
      type:String,
      required:true
    },
    authorName:String,
    prices: {
        indianPrice:String,
        europeanPrice: String,
    },
    year:{
        type:Number,
        default:2021,
    },
    tags: [ String ],
    totalPages:Number,
    stockAvailable:{type:Boolean,deault:false}
   // isIndian: Boolean,
   // parentsInfo:{motherName:String,fatherName:String,},
   // cars:[string]

},{timestamps: true})
module.exports=mongoose.model("book",bookSchema)

//module.exports=