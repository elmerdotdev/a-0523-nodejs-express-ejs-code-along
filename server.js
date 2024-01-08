import express from 'express'
const app = express()

// Import todo routes
import todoRouter from './routes/todo.js'

// Set view engine to ejs
app.set('view engine', 'ejs')

// Set the public folder for static files
app.use(express.static('public'))

// Middleware to parse the body of the request
app.use(express.urlencoded({ extended: true }))

// Route for home
app.get('/', (req, res) => {
  res.render('index', { firstname: 'Elmer' })
})

// Route for about
app.get('/about', (req, res) => {
  res.render('about')
})

// Route for contact
app.get('/contact', (req, res) => {
  res.render('contact')
})

// Route for contact form submission
app.post('/submit', (req, res) => {
  const { fullname, email, message } = req.body
  console.log(`Name: ${fullname}, Email: ${email}, Message: ${message}`)

  // Insert to database or email to user logic here

  res.send(`Thank you for contacting us, ${fullname}`)
})

// Use todo routes
app.use('/todos', todoRouter)

// Port
const PORT = 3000

// Star server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})