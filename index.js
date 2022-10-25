const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const course = require('./data/course.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('victorians-skill-development server api under working....')
})


// load all the course
app.get('/course', (req, res) => {
    res.send(course);
})


// load single course
app.get('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourse = course.find(course => course.id === id);
    res.send(selectedCourse);

})






app.listen(port, () => {
    console.log("victorians-skill-development server is running on port ", port);
})