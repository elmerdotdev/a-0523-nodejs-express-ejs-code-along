import express from 'express';
import fetch from 'node-fetch'

const router = express.Router();

// Route for todos home
router.get('/', async (req, res) => {
  const response = await fetch('https://dummyjson.com/todos')
  const data = await response.json()

  res.render('todos', { todos: data.todos })
})

// Route to get add todo page
router.get('/add', (req, res) => {
  res.render('addTodo')
})

// Route to add todo
router.post('/add', async (req, res) => {
  const { newtodo } = req.body

  const response = await fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todo: newtodo,
      userId: 26,
      completed: false
    })
  })

  const data = await response.json()
  res.send(data)
})

export default router