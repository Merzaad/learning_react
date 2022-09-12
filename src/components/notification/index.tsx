import React from 'react'
import '../../App.css'
import notifContext from '../../context/notifContext'

const Notification = () => {
  const { update, close } = React.useContext(notifContext)
  React.useEffect(() => {
    console.log(`notif rendered update: ${update}`)
  })
  return (
    <div className="notif">
      <div className="paper">
        <button onClick={() => close()}>close</button>
      </div>
    </div>
  )
}

export default Notification
