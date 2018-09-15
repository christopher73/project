let mongoose = require('mongoose');
let validator = require('validator')

const server = '127.0.0.1:27017';
const database = 'mongo-exercies';


mongoose.connect(`mongodb://${server}/${database}`)
.then(()=>{
    console.log('connected to db ...')
})
.catch (err=>{console.error('cant connect ',err)
})

const courseSchema = new mongoose.Schema({

    name:String,
    author:String,
    price:Number,
    tags:[String],
    date:{type:Date ,  default:Date.now},
    isPublished:Boolean
})

const Course =  mongoose.model('Course', courseSchema);   //usins schema

const ids = '5b9b1c8b5976d62ac4991246';

Course.find( )

function update (id)  {  
    Course
    .findOneAndUpdate(
            {
                _id:id
            },
            {
                author:'chris 71'
            },
            {
                //useNewUrlParser: true ,
                new:true
            }
    )
    .then(doc => {
        console.log(doc)
    })
    .catch (err =>{
        console.error(err)
    })

    }


update(ids);
//createcourse ();