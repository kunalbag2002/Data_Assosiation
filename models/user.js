const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://data_assosiation:Kunal2002.@cluster0.fudstpt.mongodb.net/mini-project')
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch(err => console.log('❌ MongoDB Connection Error:', err));

const userSchema= mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }]
});

module.exports= mongoose.model('User', userSchema);
