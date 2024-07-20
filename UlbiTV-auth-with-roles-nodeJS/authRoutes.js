const Router = require('express')
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

const router = new Router()

router.post(
  '/registration',
  [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({
      min: 4,
      max: 10,
    }),
  ],
  controller.registration,
)
router.post('/login', controller.login)
// router.get('/users', controller.getUser)
// router.get('/users', authMiddleware, controller.getUser)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUser)

module.exports = router
