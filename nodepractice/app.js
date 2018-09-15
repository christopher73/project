const Joi = require('joi');

const express = require('express');

const app = express();

app.use(express.json() );//middleware

//array to play with

const courses=[

    {id: 1, name: 'course 1 '},

    {id: 2, name: 'course 2 '},

    {id: 3, name: 'course 3 '},

];

 

app.get('/',(req,respon)=>{

    respon.send('hello');

});

app.get('/api/courses',(req,respon)=>{

    respon.send(courses);

});

app.post('/api/courses',(req,respon)=>{

    const {error} = validateCourse(req.body);
    if (error)        return respon.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    respon.send(course);

});

app.put('/api/courses/:id',(req,respon)=>{

    //get course 

    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    if (!course) return respon.status(404).send(`course ID ${parseInt(req.params.id)} not found`);       // to return not found 404

    //schema 

    const {error} = validateCourse(req.body);
    if (error)        return respon.status(400).send(error.details[0].message); // 400 bad request 


    course.name= req.body.name;
    respon.send(course);

});

app.delete('/api/courses/:id',(req,respon)=>{
    // look up the course 
    //not existing return 404
    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    if (!course) return respon.status(404).send(`course ID ${parseInt(req.params.id)} not found`); 
    //delete
    const index=courses.indexOf(course);
    courses.splice(index, 1 );
    //return the same course 
    respon.send(course);
});




function validateCourse(course){   // returns for validate course 
    const schema ={
        name: Joi.string().min(3).required() 
    };
    return Joi.validate(course, schema);
};

app.get('/api/courses/:id',(req,respon)=>{

    const course = courses.find(c=>c.id=== parseInt(req.params.id) );

    if (!course) respon.status(404).send(`course ID ${parseInt(req.params.id)} not found`);       // to return not found 404

    respon.send(course);

});

//PORT process 

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`listening on port ${port} ... `));