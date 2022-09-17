import React from 'react'
import cls from './WorkerCards.module.scss'
import { Admin } from 'pages/Admin'
import { Loader } from 'components/Loader'
import { useNavigate } from 'react-router-dom'
import { RoomStartBtn } from 'pages/Admin/adminUI/RoomStartBtn'

export const WorkerCards = () => {
  const navigate = useNavigate()

  const {
    workers,
    isLoading,
  } = Admin.Hook.Main.use()

  if (isLoading || !workers) return <Loader />

  return (
    <div className={cls.root}>
      <h2>Работники</h2>
      <div className={cls.container}>
        <div className={cls.workers}>
          {
            workers.map(({ key, firstName, lastName, photoUrl }) => (
              <div
                key={key}
                className={cls.card}
              >
                <img src={photoUrl} alt="#" />
                <h2>{firstName} {lastName}</h2>
                <RoomStartBtn children={'Отчеты'} onClick={() => navigate(`/admin/worker/reports/${key}`)}/>
                {/* <button onClick={() => navigate(`/admin/worker/reports/${key}`)}>Посмотреть отчеты</button> */}
              </div>
            ))
          }
        </div>
        <button onClick={() => navigate('/admin/auth/registerworker')}>+Добавить работника</button>
      </div>
    </div>
  )
}
