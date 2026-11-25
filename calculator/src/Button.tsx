type ButtonProps = {
    value: number | string;
    onClick?: () => void;
}

export default function Button({ value, onClick }: ButtonProps) {
    return (
        <button  
        onClick={onClick}
        className="bg-gray-100 rounded-md text-2xl font-semibold text-black hover:bg-gray-200">
            {value}
        </button>
    );
}