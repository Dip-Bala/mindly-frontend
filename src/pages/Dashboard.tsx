import {useState} from 'react'
import {Button} from '../components/ui/Button'
import {PlusIcon} from '../icons/PlusIcon'
import {ShareIcon} from '../icons/ShareIcon'
import {Sidebar} from '../components/ui/Sidebar'
import {Card} from '../components/ui/Card'
import {CreateContentModal} from '../components/ui/createContent/CreateContentModal'

function DashBoard() {
  // const navigate = useNavigate();
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <div >
      <Sidebar />
    <div className="flex">
    <CreateContentModal open={ModalOpen} onClose={() => setModalOpen(false)}/>
      <div className="flex flex-col w-full px-2 gap-4 py-4 ml-72 bg-gray-50">
      <TopBar setModalOpen={setModalOpen}/>
      <CardContainer/>
      </div>
    </div>
    </div>
  )
}


function CardContainer(){
  return (
    <div className="flex flex-wrap gap-4">
      <Card title={"Nikhil Kamath Podcast"} type={"youtube"} link={"https://www.youtube.com/embed/ZXAcTToLy_Y?si=bFB7ul3EwOQTFZtQ"}/>
      <Card title={"Someone got his first salary"} type={"tweet"} link={"https://www.youtube.com/embed/ZXAcTToLy_Y?si=bFB7ul3EwOQTFZtQ"}/>
      <Card title={"Nikhil Kamath Podcast"} type={"youtube"} link={"https://www.youtube.com/embed/ZXAcTToLy_Y?si=bFB7ul3EwOQTFZtQ"}/>
      <Card title={"Someone got his first salary"} type={"tweet"} link={"https://www.youtube.com/embed/ZXAcTToLy_Y?si=bFB7ul3EwOQTFZtQ"}/>
      <Card title={"Nikhil Kamath Podcast"} type={"youtube"} link={"https://www.youtube.com/embed/ZXAcTToLy_Y?si=bFB7ul3EwOQTFZtQ"}/>
      <Card title={"Someone got his first salary"} type={"tweet"} link={"https://www.youtube.com/embed/ZXAcTToLy_Y?si=bFB7ul3EwOQTFZtQ"}/>
      </div>
      
  )
}
function TopBar({setModalOpen}){
//   const navigate = useNavigate();
  return (
    <div className="flex justify-end gap-4">
    <Button variant={"primary"} size={"md"} text={"Share Mind"} startIcon={<ShareIcon size="md"/>}/>
    <Button variant={"secondary"} size={"md"} text={"Add Content"} startIcon={<PlusIcon size="md"/>} onClick={() => setModalOpen(true)}/>
      </div>
  )
}
export default DashBoard
