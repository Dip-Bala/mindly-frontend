import {CancelIcon} from '../../icons/CancelIcon'
import {Button} from '../ui/Button'
import {Input} from "../ui/Input"

interface CreateContentModalProps{
    open: boolean;
    onClose: () => void
}
export function CreateContentModal({open, onClose}){
    return(
        <div className="">
        {
            open && 
            <div className="flex items-center justify-center w-screen h-screen fixed bg-black opacity-80">
                <div className="w-sm bg-white opacity-100 p-2">
                    <CreateContentForm onClose={onClose}/>
                </div>
            </div>
        }
        </div>
    )

}

function CreateContentForm({onClose}){
    return(
        <form >
            <div onClick={onClose}>
            <CancelIcon size="md" />
            </div>
            {/* <Input placeholder={""}/>   */}//////////////////////////
            <Button variant="primary" text="Submit" size="md"/>
        </form>

    )
}


