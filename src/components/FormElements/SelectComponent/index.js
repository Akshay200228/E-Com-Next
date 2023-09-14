export default function SelectComponent({
    label,
    value,
    onChange,
    options = [],
}) {
    return (
        <div className="relative">
            <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white ">
                {label}
            </p>
            <select
                value={value}
                onChange={onChange}
                className="block w-full pt-4 pb-4 pl-4 pr-4 mt-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            >
                {options && options.length ? (
                    options.map((optionItem) => (
                        <option
                            id={optionItem.id}
                            value={optionItem.id}
                            key={optionItem.id}
                        >
                            {optionItem.label}
                        </option>
                    ))
                ) : (
                    <option id="" value={""}>
                        Select
                    </option>
                )}
            </select>
        </div>
    );
}