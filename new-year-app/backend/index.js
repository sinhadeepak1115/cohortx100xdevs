const express = require('express')
const app = express()
const { createTodo } = require('./types')
const { updateTodo } = require('./types')
const port = 3000

app.use(express.json());

app.get('/todo', (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msf: "You sent the wrong inputs",
    })
    return;
  }
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
