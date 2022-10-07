import React from 'react'
/* import '../../App.css' */
import notifContext from '../../context/notifContext'

const Notification = () => {
  // todo css
  const { close } = React.useContext(notifContext)
  return (
    <div className="notif">
      <div className="paper">
        <button onClick={() => close()}>update</button>
      </div>
    </div>
  )
}

export default Notification
