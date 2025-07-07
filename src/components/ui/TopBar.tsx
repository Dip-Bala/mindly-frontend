import { Button } from '../../components/ui/Button'
import { PlusIcon } from '../../icons/PlusIcon'
import { ShareIcon } from '../../icons/ShareIcon'
import {useShareMindMutation} from '../../hooks/useShareMind'
import {toast} from 'react-toastify'

export function TopBar({ setModalOpen}) {
  const shareMindMutation = useShareMindMutation(
    (data) => {
      navigator.clipboard.writeText(`http://localhost:5173${data}`);
      toast.info('Your mind copied to clipboard')
    },
    (err) => {
      alert(err)
    }
  )
  function shareMind(){
    shareMindMutation.mutate(true)
  }
  return (
    <div className="flex justify-end gap-4">
      <Button variant={"primary"} size={"md"} text={"Share Mind"} startIcon={<ShareIcon size="md" />} onClick={shareMind}/>
      <Button variant={"secondary"} size={"md"} text={"Add Content"} startIcon={<PlusIcon size="md" />} onClick={() => setModalOpen(true)} />
    </div>
  )
}