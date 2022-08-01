require("dotenv").config()

const express = require("express")
const jwt = require("jsonwebtoken")

const privateInformations = [
  {
    userName: "gab",
    pwd: "lilo"
  },
  {
    userName: "baba",
    pwd: "babybel"
  }
]
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]

  let token
  if (authHeader) {
    token = authHeader.split(" ")[1]
  }
  if (!token) {
    return res.sendStatus(401)
  }
  jwt.verify(token, process.env.SECRET, (err, payload) => {
    if (err) {
      return res.sendStatus("403")
    }
    req.userName = payload.userName

    next()
  })
}
const app = express()
app.use(express.json())

app.get("/privates", authenticateToken, (req, res) => {

  const users = privateInformations.filter(
    (user) => user.userName === req.userName
  ).map((user) => {
    return {
      name: user.userName
    }
  })
  res.json(users)
})

app.post('/login', (req, res) => {
  const payload = {
    userName: req.body.userName
  }
  const token = jwt.sign(payload, process.env.SECRET)

  res.json({ token })
})

app.listen(3010)


