import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const messagingCount = useRecoilValue(messagingAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)

  return (
    <div>
      <button>Home</button>

      <button>My network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>Messaging ({messagingCount >= 100 ? "99+" : messagingCount})</button>
      <button>Notification ({notificationsCount >= 100 ? "99+" : notificationsCount})</button>

      <ButtonUpdater />
    </div>
  )
}

function ButtonUpdater() {
  const setMessagingCount = useSetRecoilState(messagingAtom)
  const totalNotifications = useRecoilValue(totalNotificationSelector)
  
  return (
    <div>
      <button onClick={() => {
        setMessagingCount(c => c + 1)
      }}>Me ({totalNotifications})</button>
    </div>
  )
}

export default App
