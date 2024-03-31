import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilValueLoadable, useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE } from 'recoil'
import { todoAtomFamily } from './atoms'

function App() {

  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
      <Todo id={5} />
    </RecoilRoot>
  )
}

function Todo({id}) {
  const todos = useRecoilValueLoadable(todoAtomFamily(id))

  if (todos.state === "loading") {
    return (
      <>
        Loading... <br />
      </>
    )
  }

  else if (todos.state === "hasValue") {
    return (
      <>
        {todos.contents.title} = {todos.contents.description} <br />
      </>
    )
  }

  else if (todos.state === "hasError") {
    return (
      <>
        Error while fetching data... <br />
      </>
    )
  }
}

export default App
