import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/createContent/CreateContentModal'
import { useContentQuery } from '../hooks/useContentQuery'

function DashBoard() {
  // const navigate = useNavigate();
  const [ModalOpen, setModalOpen] = useState(false);
  const { data, isLoading, isError } = useContentQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching content</p>;

  return (
    <div >
      <Sidebar />
      <div className="flex">
        <CreateContentModal open={ModalOpen} onClose={() => setModalOpen(false)} />
        <div className="flex flex-col w-full px-2 gap-8 py-4 ml-72 bg-gray-50">
          <TopBar setModalOpen={setModalOpen} />
          <div className="flex flex-wrap gap-8 justify-center">
            {data?.map(({title, type, link, tags, timeStamp, _id}) => {
              return <Card title={title} type={type} link={link} tags={tags} timeStamp={timeStamp} contentId={_id}/>
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

function TopBar({ setModalOpen }) {
  //   const navigate = useNavigate();
  return (
    <div className="flex justify-end gap-4">
      <Button variant={"primary"} size={"md"} text={"Share Mind"} startIcon={<ShareIcon size="md" />} />
      <Button variant={"secondary"} size={"md"} text={"Add Content"} startIcon={<PlusIcon size="md" />} onClick={() => setModalOpen(true)} />
    </div>
  )
}
export default DashBoard
