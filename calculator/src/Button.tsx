type ButtonProps = {
    value: number | string;
}

export default function Button({ value }: ButtonProps) {
    return (
        <button className="bg-gray-100 rounded-md text-2xl font-semibold text-black hover:bg-gray-200">
            {value}
        </button>
    );
}