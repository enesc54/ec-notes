import DynamicTextArea from "components/DynamicTextArea";

import { forwardRef, useState } from "react";

function TodoListItem(props, ref) {
    const [value, setValue] = useState("");
    return (
        <div
            className='flex flex-row items-center gap-4'
            onKeyDown={e => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    if (value === "") {
                        props.deleteItem(props.data.id);
                    } else {
                        props.addItem(props.data.id);
                    }
                }
            }}
        >
            <input className='w-5 h-5 ' type='checkbox' />
            <DynamicTextArea value={value} setValue={setValue} ref={ref} />
        </div>
    );
}

export default forwardRef(TodoListItem);
