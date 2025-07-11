import { useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/createContent/CreateContentModal'
import { useContentQuery } from '../hooks/useContentQuery'
import { Loader } from '../components/ui/Loading'
import { TopBar } from '../components/ui/TopBar'
import { type ContentType } from '../types/types';


function DashBoard() {
  const [ModalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<ContentType>("");
  // const selectTypeRef = useRef("selectedType");
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

        <div className="flex flex-col w-full bg-gray-50">
          <TopBar setModalOpen={setModalOpen} />
          <div className="grid gap-6 pt-24 px-4 md:px-10 md:ml-60 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredData?.map(({ title, type, link, tags, timeStamp, _id }) => {
              return <Card key={_id} title={title} type={type} link={link} tags={tags} timeStamp={timeStamp} contentId={_id} />
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default DashBoard
