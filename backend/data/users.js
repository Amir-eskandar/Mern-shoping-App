import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('amir1234', 10),
    isAdmin: true,
  },
  {
    name: 'Amir Eskandar',
    email: 'amir@example.com',
    password: bcrypt.hashSync('amir1234', 10),
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('amir1234', 10),
  },
]

export default users
