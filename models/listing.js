const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        filename: { type: String, /*required: true*/ },
        url: { type: String, /*required: true, */default: 'https://unsplash.com/photos/a-river-running-through-a-forest-filled-with-lots-of-trees-Tji1V-79Qqc' }
    },
    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;