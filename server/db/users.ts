import db from './connection.ts'
import { User } from '../../types/User.ts'

export async function getAllUsers() {
  const users = await db('users').select()
  return users as User[]
}

export async function getUserById(id: number) {
  const users = await db('users').where('id', '=', id)
  return users as User[]
}

export async function addUser(data: User) {
  const [id] = await db('users').insert(data)
  return id
}
