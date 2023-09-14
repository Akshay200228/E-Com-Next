export default function InputComponent({
    label,
    placeholder,
    onChange,
    value,
    type,
}) {
    return (
        <div className="relative">
            <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white ">
                {label}
            </p>
            <input
                placeholder={placeholder}
                type={type || "text"}
                value={value}
                onChange={onChange}
                className="block w-full pt-4 pb-4 pl-4 pr-4 mt-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            />
        </div>
    )
}
