const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
let course = [
    { id: 101, title: "DBMS" },
    { id: 102, title: "Java" }
];
app.get('/course', (req, res) => {
    res.json(course);
});
app.post('/course', (req, res) => {
    const newCourse = {
        id: req.body.id != null ? req.body.id : course.length + 1,
        title: req.body.title
    };
    course.push(newCourse);
    res.status(201).json(newCourse);
});
app.put('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cou = course.find(c => c.id === id);
    if (cou) {
        cou.title = req.body.title;
        res.json({
            Message: "Course updated successfully",
            cou
        });
    } else {
        res.status(404).json({
            Message: "Course not found"
        });
    }
});
app.delete('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const exists = course.some(c => c.id === id);
    if (!exists) {
        return res.status(404).json({
            Message: "Course not found"
        });
    }
    course = course.filter(c => c.id !== id);
    res.json({
        Message: `Course ${id} deleted`,
        remainingCourse: course
    });
});
app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});