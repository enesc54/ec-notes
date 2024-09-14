import DynamicTextArea from "components/DynamicTextArea";

import { forwardRef, useState } from "react";

function TodoListItem(props, ref) {
    const [value, setValue] = useState(props?.data?.content || "");
    const [isChecked, setIsChecked] = useState(props?.data?.isChecked || "");

    return (
        <div
            className='flex flex-row items-center gap-4'
            onKeyDown={e => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    if (value === "") {
                        props.deleteItem(props.id);
                    } else {
                        props.addItem(props.id);
                    }
                }
            }}
        >
            <input
                className='w-5 h-5'
                type='checkbox'
                defaultChecked={isChecked}
                onChange={() => {
                    setIsChecked(isChecked => !isChecked);
                }}
            />
            <DynamicTextArea
                value={value}
                setValue={setValue}
                placeholder='To-Do'
                ref={ref}
                onChange={e => {
                    props.onContentChange(e.target.value);
                }}
            />
        </div>
    );
}

export default forwardRef(TodoListItem);
