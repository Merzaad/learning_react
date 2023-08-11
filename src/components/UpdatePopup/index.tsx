import React from 'react'
import notifContext from '../../context/notifContext'
import Button from '../Button'

const UpdatePopup = () => {
  const { close } = React.useContext(notifContext)
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        zIndex: '2',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        minHeight: '100vh',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Button onClick={() => close()}>update</Button>
    </div>
  )
}

export default UpdatePopup
