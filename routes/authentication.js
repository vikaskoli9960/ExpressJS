const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// router.set('view engine', 'pug')
// router.set('views', '/views')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))
router.use(upload.array())
router.use(cookieParser())
router.use(session({secret: 'Your secret key', resave: true, saveUninitialized: true}))

let Users = []

router.get('/signup', (request, response)=>{
    response.render('signup')
})

module.exports = router