import React from 'react'

export const ViewItems = ({ onClick, completed, text }) => 
(
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
    {text}
    </li>
  )
