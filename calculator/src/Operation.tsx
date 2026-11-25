
type OperationProps = {
    sign : string;
    onClick?: () => void;
}
export default function Operation({sign, onClick} : OperationProps){

    return(
        <button 
        onClick = {onClick}
        className="bg-oranger-400 rounded-md text-2xl font-semibold text-black h-[70px] hover:bg-orange-200">
            {sign}
        </button>

    )
}