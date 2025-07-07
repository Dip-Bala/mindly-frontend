import { useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/createContent/CreateContentModal'
import { useContentQuery } from '../hooks/useContentQuery'
import { Loader } from '../components/ui/Loading'
import { TopBar } from '../components/ui/TopBar'

type ContentType = "document" | "tweet" | "youtube" | "";

function DashBoard() {
  const [ModalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<ContentType>("");
  const { data, isLoading, isError } = useContentQuery();
  if (isLoading) return <Loader />;
  if (isError) return <p>Error fetching content</p>;

  const filteredData = selectedType ? data?.filter(item => item.type === selectedType) : data;

  // console.log(filteredData)

  return (
    <div >
      <Sidebar onSelectType={setSelectedType} activeType={selectedType}/>
      <div className="flex min-h-screen">
        <CreateContentModal open={ModalOpen} onClose={() => setModalOpen(false)} />

        <div className="flex flex-col w-full px-2 gap-8 py-4 ml-72 bg-gray-50">
          <TopBar setModalOpen={setModalOpen} />

          <div className="flex flex-wrap  gap-8 justify-center">
            {filteredData?.map(({ title, type, link, tags, timeStamp, _id }) => {
              return <Card title={title} type={type} link={link} tags={tags} timeStamp={timeStamp} contentId={_id} />
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default DashBoard
