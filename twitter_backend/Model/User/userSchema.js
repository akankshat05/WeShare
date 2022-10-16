const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    vpassword: { type: String, required: true },
    // profilePic: {type: String, required: true},
    tokens: [{
        token: { type: String, required: true }
    }]
})
//HASHING THE PASSWORD
userSchema.pre('save', async function (next) {
    console.log("hi from bcrypt");
    if (this.isModified('password')) {

        this.password = await bcrypt.hash(this.password, 12)
        this.vpassword = await bcrypt.hash(this.vpassword, 12)
    }
    next()
})
//generating token... methods is instance method
userSchema.methods.generateAuthToken = async function () {
    try {
        let token1 = jwt.sign({ _id: this._id }, process.env.jwt_secret)
        // saving in database
        this.tokens = this.tokens.concat({ token: token1 })
        await this.save();
        return token1
    }
    catch (err) {
        console.log(err)
    }
}
const userModel = mongoose.model('USERMODEL', userSchema)
module.exports = userModel