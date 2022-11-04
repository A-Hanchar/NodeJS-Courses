const User = require('./user-model')

// const users = [
//   {
//     id: 1,
//     name: 'Vasya Pupkin'
//   },
//   {
//     id: 2,
//     name: 'Zhenya Vlasou'
//   }
// ]

const getUsers = async (request, response) => {
  // if(request.params.id) {
  //   return response.send(users.find(user => String(user.id) === String(request.params.id)))
  // }

  let users

  if (request.params.id) {
    users = await User.findById(request.params.id)
  } else {
    users = await User.find()
  }

  response.send(users)
}

const createUser = async (request, response) => {
  // const user = request.body
  // users.push(user)

  const user = await User.create(request.body)
  response.send(user)
}

module.exports = {
  getUsers,
  createUser,
}
