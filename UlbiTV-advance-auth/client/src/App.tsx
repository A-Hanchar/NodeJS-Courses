import React, { useContext, useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import { Context } from '.'
import { observer } from 'mobx-react-lite'
import { IUser } from './models/IUser'
import UserService from './services/UserService'

function App() {
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers()

      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (store.isLoading) {
    return <div>Загрузка...</div>
  }

  if (!store.isAuth) {
    return (
      <div>
        <h1>АВТОРИЗУЙТЕСЬ</h1>
        <LoginForm />
      </div>
    )
  }

  return (
    <div>
      <h1>{`Пользователь авторизован ${store.user.email}`}</h1>
      <h2>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h2>
      <button
        onClick={() => {
          store.logout()
          setUsers([])
        }}
      >
        Выйти
      </button>

      <div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>

      {users.map(({ id, email, isActivated }) => (
        <div key={id}>
          {email} : {isActivated ? 'Активирован' : 'Не активирован'}
        </div>
      ))}
    </div>
  )
}

export default observer(App)
