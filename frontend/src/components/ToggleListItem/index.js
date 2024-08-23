import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";
import DynamicTextArea from "components/DynamicTextArea";

import { forwardRef, useState } from "react";

function ToggleListItem(props, ref) {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleTitle, setToggleTitle] = useState("");
    const [toggleContent, setToggleContent] = useState("xxx");

    return (
        <div className='flex flex-row items-start gap-4'>
            <div
                className='mt-1'
                onClick={e => {
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? <VscTriangleDown /> : <VscTriangleRight />}
            </div>
            <div>
                <div
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            if (toggleTitle === "" && toggleContent === "") {
                                props.deleteItem(props.data.id);
                            } else {
                                props.addItem(props.data.id);
                            }
                        }
                    }}
                >
                    <DynamicTextArea
                        placeholder='Toggle'
                        value={toggleTitle}
                        setValue={setToggleTitle}
                        ref={ref}
                    />
                </div>
                <div className={`${!isOpen ? "hidden" : ""}`}>
                    <DynamicTextArea
                        placeholder='Empty toggle...'
                        value={toggleContent}
                        setValue={setToggleContent}
                    />
                </div>
            </div>
        </div>
    );
}

export default forwardRef(ToggleListItem);
