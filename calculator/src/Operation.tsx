
type OperationProps = {
    sign : string
}
export default function Operation({sign} : OperationProps){

    return(
        <button className="bg-oranger-400 rounded-md text-2xl font-semibold text-black h-[70px] hover:bg-orange-200">
            {sign}
        </button>

    )
}