const express = require('express')

const app = express()

const tasks = [{
    id: 1,
    title:"first task"
}]

app.get('/tasks', (req,res) => {
    res.json(tasks)
})
app.put('/tasks/:taskId', (req, res) => {
    tasks.map((task) => task.id == req.params.taskId ? {
        ...task,
        title:req.body.title
    } : tasks) 
    return res.json(tasks)
})

app.delete("/tasks/:taskId", (req, res) => {
  tasks.filter((task) => task.id!=req.params.taskId );
  return res.json(tasks);
});