import {useNavigate} from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { PlusIcon } from '../../icons/PlusIcon'
import { ShareIcon } from '../../icons/ShareIcon'
import { useShareMindMutation } from '../../hooks/useShareMind'
import { toast } from 'react-toastify'
import { BrainIcon } from '../../icons/BrainIcon'

export function TopBar({ setModalOpen }) {
  const navigate = useNavigate();
  const shareMindMutation = useShareMindMutation(
    (data) => {
      navigator.clipboard.writeText(`http://localhost:5173${data}`);
      toast.info('Your mind copied to clipboard')
    },
    (err) => {
      alert(err)
    }
  )
  function shareMind() {
    shareMindMutation.mutate(true)
  }
  return (
    <>
      <div className="fixed w-full p-4 jutify-center items-center border-b border-gray-100 bg-gray-50 md:bg-none md:border-none">
        <div className="flex fixed text-lg font-semibold jutify-center text-slate-600 items-center gap-2" onClick={() => navigate('/')}>
          <BrainIcon className="w-10"/>
          <p>Mindly</p>
        </div>
        <div className="hidden md:flex justify-end gap-4">
          <Button variant={"primary"} size={"md"} text={"Add Content"} startIcon={<PlusIcon size="md" />} onClick={() => setModalOpen(true)} />
          <Button variant={"secondary"} size={"md"} text={"Share Mind"} startIcon={<ShareIcon size="md" />} onClick={shareMind} />
        </div>

        <div className="md:hidden flex justify-end gap-4 mr-4 ">
          <Button variant={"primary"} size={"md"} startIcon={<PlusIcon size="md" />} onClick={() => setModalOpen(true)} />
          <Button variant={"secondary"} size={"md"} startIcon={<ShareIcon size="md" />} onClick={shareMind} />
        </div>
      </div>

    </>
  )
}