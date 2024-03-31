import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { todoFamily } from './atoms'

function App() {

  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}

function Todo({id}) {
  const todos = useRecoilValue(todoFamily(id))

  return (
    <div>
      {todos.title} - {todos.description}
    </div>
  )
}

export default App
