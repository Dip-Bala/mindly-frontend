import { CreateContentForm } from '../createContent/CreateContentForm'


interface CreateContentModalProps {
    open: boolean;
    onClose: () => void
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    return (
        <div className="">
            {
                open &&
                <div className="flex items-center justify-center w-screen h-screen fixed bg-gray-transparent z-500">
                    <div className="w-sm bg-white opacity-100 p-6 rounded-md">
                        <CreateContentForm  onClose={onClose}/>
                    </div>
                </div>
            }
        </div>
    )

}




