const mongoose = require ('mongoose')
const { Schema } = mongoose

const languageSchema = new Schema ({
    name:{type: String, required: true}, 
    greeting: String, 
    pangram: String, 
    filler: String
})




//model & export 

const Language = mongoose.model('Language', languageSchema)
module.exports = Language