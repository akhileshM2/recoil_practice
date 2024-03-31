import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { networkAtom, totalNotificationSelector } from './atoms'
import axios from 'axios'

function App() {

  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {

  const [networkCount, setNetworkCount] = useRecoilState(networkAtom)
  const totalNotifications = useRecoilValue(totalNotificationSelector)

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then((res) => {
  //     setNetworkCount(res.data)
  //   })
  // }, [])

  return (
    <div>
      <button>Home</button>

      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs >= 100 ? "99+" : networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging >= 100 ? "99+" : networkCount.messaging})</button>
      <button>Notification ({networkCount.notifications >= 100 ? "99+" : networkCount.notifications})</button>

      <button>Me ({totalNotifications})</button>
    </div>
  )
}

export default App
