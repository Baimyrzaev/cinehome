import React from 'react'
import cls from './RoomCardsPage.module.scss'
import { RoomCards } from 'pages/Admin/components/RoomCards'
import Swal from 'sweetalert2'
import { AddRoomModal } from 'pages/Admin/components/AddRoomModal'

const RoomCardsPageSkeleton = () => {
  const roomCardsArr = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className={cls.roomCardsPageSkeleton}>
      <div></div>
      <div>
        {
          roomCardsArr.map(item => (
            <section key={item}></section>
          ))
        }
      </div>
    </div>
  )
}

export const RoomCardsPage = ({
  rooms,
  isLoadingRooms,
  isLoadingPostRoom,
  deleteRoom,
  postRoom,
}) => {
  const [isActiveAddRoomModal, setIsActiveAddRoomModal] = React.useState(false)

  const onDelete = (roomId) => {
    Swal.fire({
      title: 'Вы действительно хотите удалить?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Отменить',
      confirmButtonText: 'Удалить',
    }).then((result) => {
      if (result.isConfirmed) deleteRoom(roomId)
    })
  }


  if (isLoadingRooms) return <RoomCardsPageSkeleton />

  return (
    <>
      <div className={cls.root}>
        <h1>Комнаты</h1>
        <div className={cls.container}>
          {
            rooms?.map(({ roomImage, isActive, key }, index) => (
              <RoomCards
                key={key}
                index={index}
                roomImage={roomImage}
                isActive={isActive}
              >
                <button onClick={() => onDelete(key)}>Удалить</button>
              </RoomCards>
            ))
          }
        </div>
        <button onClick={() => setIsActiveAddRoomModal(true)}>Добавить комнату</button>
      </div>
      {
        isActiveAddRoomModal &&
        <AddRoomModal
          isActive={isActiveAddRoomModal}
          setIsActive={setIsActiveAddRoomModal}
          isLoading={isLoadingPostRoom}
          postRoom={postRoom}
        />
      }
    </>
  )
}
