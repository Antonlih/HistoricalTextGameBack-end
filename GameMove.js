import mongoose from 'mongoose';

const GameMove = new mongoose.Schema({
    description: {type: String, required: true},
    question: {type: String, required: true},
    answer_1: {type: String, required: true},
    answer_2: {type: String, required: true},
    answer_3: {type: String, required: true},
    illustration: {type: String}
})

export default mongoose.model('GameMove', GameMove)