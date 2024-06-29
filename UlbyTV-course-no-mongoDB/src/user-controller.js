const users = [
  {
    id: 1,
    name: "Vasya",
  },
  {
    id: 2,
    name: "Petya",
  },
];

const getUsers = (req, res) => {
  if (req.params.id) {
    return res.send(users.find((user) => user.id === Number(req.params.id)));
  }

  res.send(users);
};

const createUser = (req, res) => {
  console.log(req.body);

  const user = req.body;

  users.push({
    id: users.length + 1,
    ...user,
  });

  res.send(users);
};

module.exports = {
  getUsers,
  createUser,
};
