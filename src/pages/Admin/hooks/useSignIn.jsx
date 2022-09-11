import React from 'react'
import { auth } from 'configs'
import { Admin } from '..'
import { useNavigate } from 'react-router-dom'


const useSignIn = () => {
  const {
    workers,
    admin,
  } = Admin.Hook.Main.use()

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = React.useState(false)

  const onAuth = (body) => {
    const request = auth(body, true)

    setIsLoading(true)
    request
      .then(res => {
        const data = res.data
        if (data.localId === admin.localId) {
          alert('Добро пожаловать!')
          localStorage.setItem('admin', data.localId)
          return navigate('/admin')
        }

        const isWorker = workers.find(({ email }) => email === data.email)

        if (isWorker) {
          alert(`Приветствую ${isWorker.firstName}`)
          localStorage.setItem('workerId', isWorker.key)
          return navigate(`/admin/worker/${isWorker.key}`)
        }

        alert('Вы не являетесь частью админки')
      })
      .catch(() => alert('Ошибка!'))
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    actions: {
      onAuth,
    },
  }
}

export const use = useSignIn
