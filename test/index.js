const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercies')
.then(()=>console.log('connected to db ...'))
.catch (err=>console.error('cant connect ',err));

const courseSchema = new mongoose.Schema({

	    name:String,
	    author:String,
	    price:Number,
	    tags:[String],
	    date:{type:Date ,  default:Date.now},
	    isPublished:Boolean
});

const Course =  mongoose.model('courses', courseSchema);   //usins schema



const n = async function run(id) {
	    return await Course.findByIdAndUpdate(id,{
		              
					                author: 'Jack1',
					                isPublished: false
					            
					}, { new: true } );

}

console.log (n('5a68fe2142ae6a6482c4c9cb'));
//run('5a68fe2142ae6a6482c4c9cb');
//createcourse ();
