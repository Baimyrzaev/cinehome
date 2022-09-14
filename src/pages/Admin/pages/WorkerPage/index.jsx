import { NoAccess } from 'components/NoAccess'
import { Admin } from 'pages/Admin'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import cls from './WorkerPage.module.scss'
export const WorkerPage = () => {
  const { workerId: index } = useParams()
  const workerId = localStorage.getItem('workerId')
  const navigate = useNavigate()

  const goToSingleRoom = (roomId) => navigate(`/admin/room/${roomId}`)

  const {
    rooms,
  } = Admin.Hook.Room.use()
  console.log(rooms)

  if (!workerId) return (<NoAccess isAdmin={true}/>)

  return (
    <div className={cls.root}>
      <div className={cls.roomsContainer}>
        {
          rooms?.map(({ roomImage, isActive, key }, index) => (
            <div
              className={isActive ? cls.activeRoomBlock : cls.roomBlock}
              key={key}
              onClick={() => goToSingleRoom(key)}
            >
              <img src={roomImage} alt="#" />
              {
                isActive ? <span>Занято</span> : <span>room {index + 1}</span>
              }
            </div>
          ))
        }
      </div>

      <div className={cls.productsContainer}>

      </div>

    </div>
  )
}
