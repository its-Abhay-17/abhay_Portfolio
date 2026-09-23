const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const serviceSchema = new Schema({
    title: {
        type: "String",
        unique: true
    },
    price: {
        type: Number
    },
    img: {
        filename: {
            type: String,
            default: "default-image"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            set: (v) =>
                v === ""
                    ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    : v
        }
    }
})

const service = mongoose.model('service', serviceSchema);

module.exports = service;