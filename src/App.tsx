import {Button} from './components/ui/Button'
import {PlusIcon} from './icons/PlusIcon'
import {ShareIcon} from './icons/ShareIcon'
import {Sidebar} from './components/ui/Sidebar'
import {Card} from './components/ui/Card'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full p-8">
        <div className="flex justify-end gap-4">
      <Button variant={"primary"} size={"md"} text={"Share Mind"} startIcon={<ShareIcon size="md"/>}/>
      <Button variant={"secondary"} size={"md"} text={"Add Content"} startIcon={<PlusIcon size="md"/>}/>

        </div>
      <Card />

      </div>
    </div>
  )
}

export default App
