import React from 'react'
import cls from './RoomCards.module.scss'

export const RoomCards = ({
  roomImage,
  isActive,
  index,
  children,
  onClick,
}) => {
  return (
    <div className={cls.root} onClick={onClick}>
      <img src={roomImage} alt="#" />
      <p>Комната {index} {isActive && '(занято)'}</p>
      {children}
    </div>
  )
}
