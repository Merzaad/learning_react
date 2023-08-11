import React from 'react'
/* import '../../App.css' */
import notifContext from '../../context/notifContext'
import Button from '../Button'

const Notification = () => {
  // todo css
  const { close } = React.useContext(notifContext)
  return (
    <div className="notif">
      <div className="paper">
        <Button onClick={() => close()}>update</Button>
      </div>
    </div>
  )
}

export default Notification
