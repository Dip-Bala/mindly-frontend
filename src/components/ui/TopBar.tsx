import {useNavigate} from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { PlusIcon } from '../../icons/PlusIcon'
import { ShareIcon } from '../../icons/ShareIcon'
import { useShareMindMutation } from '../../hooks/useShareMind'
import { toast } from 'react-toastify'
import { BrainIcon } from '../../icons/BrainIcon'

type TopBarProps = {
  setModalOpen: (value: boolean) => void;
};


export function TopBar({ setModalOpen }: TopBarProps) {
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
    <div className="fixed top-0 left-0 w-full px-4 py-4 border-b border-gray-100 bg-gray-50 md:bg-none md:border-none z-50 flex justify-between items-center">
    <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 cursor-pointer" onClick={() => navigate('/')}>
      <BrainIcon className="w-10" />
      <p>Mindly</p>
    </div>
  
    <div className="hidden md:flex justify-end gap-4">
      <Button variant="primary" size="md" text="Add Content" startIcon={<PlusIcon size="md" />} onClick={() => setModalOpen(true)} />
      <Button variant="secondary" size="md" text="Share Mind" startIcon={<ShareIcon size="md" />} onClick={shareMind} />
    </div>
  
    <div className="md:hidden flex gap-2">
      <Button variant="primary" size="md" startIcon={<PlusIcon size="md" />} onClick={() => setModalOpen(true)} />
      <Button variant="secondary" size="md" startIcon={<ShareIcon size="md" />} onClick={shareMind} />
    </div>
  </div>
  
  )
}