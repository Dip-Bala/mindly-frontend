import { CreateContentForm } from '../createContent/CreateContentForm'
import { CancelIcon } from '../../../icons/CancelIcon'

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    return (
        <div className="">
            {
                open &&
                <div className="flex items-center justify-center w-screen h-screen fixed bg-gray-transparent">
                    <div className="w-sm bg-white opacity-100 p-6 rounded-md">
                        <div onClick={onClose} className="flex justify-end cursor-pointer">
                            <CancelIcon size="md"/>
                        </div>
                        <CreateContentForm />
                    </div>
                </div>
            }
        </div>
    )

}




