function LeftMenuItem(props) {
    return (
        <div
            className={`flex gap-2 items-center ${
                props.active === props.id
                    ? "bg-[#007BFF] text-white shadow-md"
                    : "bg-white"
            } p-3 mb-3 rounded-2xl`}
            onClick={() => {
                props.setActive(props.id);
            }}
        >
            <img
                src={props.icon}
                alt={props.title}
                className='w-8 h-8 rounded-full'
            />

            <div className='ml-4'>
                <div className='font-bold text-md'>{props.title}</div>
            </div>
        </div>
    );
}

export default LeftMenuItem;
