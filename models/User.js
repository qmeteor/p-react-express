/**
 * Created by Bien on 2017-10-21.
 */
const mongoose = require('mongoose');
const { Schema } = mongoose; // destructuring


const userSchema = new Schema({
    google: {
        id: String
    }
});

mongoose.model('users', userSchema);