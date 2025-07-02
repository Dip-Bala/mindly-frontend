import {Button} from './components/ui/Button'
import {PlusIcon} from './icons/PlusIcon'
import {ShareIcon} from './icons/ShareIcon'
function App() {
  return (
    <>
      <Button variant={"primary"} size={"md"} text={"Share Mind"} startIcon={<ShareIcon size="md"/>}/>
      <Button variant={"secondary"} size={"md"} text={"Add Content"} startIcon={<PlusIcon size="md"/>}/>
       
    </>
  )
}

export default App
