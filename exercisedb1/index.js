
const mongoose = require ('mongoose'); // call for mongoose 

mongoose.connect('mongodb://localhost/mongo-exercies')  // this is a promise so ... 
    .then (()=>console.log('connected to db...'))
    .catch(err=>console.error('cant connect ',err));

    const courseSchema = new mongoose.Schema({
        id:String,
        name:String,
        author:String,
        price:Number,
        tags:[String],
        date:{type:Date ,  default:Date.now},
        isPublished:Boolean
    });
    
    const Course =  mongoose.model('Course', courseSchema);   //usins schema
    

    async function getcourses(){
            return await Course
            .find ({isPublished:true})
            .or([
                {price:{$gte:15}},
                {name: / .*by.* /i }
            ])
            //.skip((pageNumber-1)*pageSize)
            //.limit (10)
            .sort({price:-1}) //sort 1 for accending -1 deccending 
            //.count()
            .select({name:1,author:1,price:1});
            //.catch (err=>console.error('cant connect ',err));
    
    } 
    
    async  function run (){
        const courses = await getcourses();
        console.log(courses);
    }

    //run();

    async function updatecourse(id){

        const course = await Course.findById(id);
        if (!course) return;
    
        course.isPublished = true;
        course.author='Another Author';
    
        const result =  await course.save();
        console.log(result);
        
    }
    
    updatecourse('5a68fdc3615eda645bc6bdec');