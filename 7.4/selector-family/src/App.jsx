
import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3} />
    <Todo id={4} />
    <Todo id={5} />
  </RecoilRoot>
}

function Todo({id}) {
   const todo = useRecoilValueLoadable(todosAtomFamily(id));

   if (todo.state === "loading") {
    return <div>
      loading...
    </div>
   }
   else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
   }
   else if (todo.state === "hasError") {
    return <div>
      Backend call failed
    </div>
   }
}

export default App
