const mongoose = require('mongoose')

const Review = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        review: { type: String, required: true }
    },
    { collection: 'user-review' }
)
const reviewModel = mongoose.model('UserReview', Review)

module.exports = reviewModel