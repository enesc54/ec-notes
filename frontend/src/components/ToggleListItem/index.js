import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";
import DynamicTextArea from "components/DynamicTextArea";

import { forwardRef, useState, useEffect } from "react";

function ToggleListItem(props, ref) {
    const { onContentChange } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [toggleTitle, setToggleTitle] = useState(props.data?.title || "");
    const [toggleContent, setToggleContent] = useState(
        props.data?.content || ""
    );

    useEffect(() => {
        const newContent = {
            title: toggleTitle,
            content: toggleContent
        };
        onContentChange(newContent);
    }, [toggleTitle, toggleContent, onContentChange]);

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
                            if (
                                toggleTitle === "" &&
                                toggleContent === undefined
                            ) {
                                props.deleteItem(props.id);
                            } else {
                                props.addItem(props.id);
                            }
                        }
                    }}
                >
                    <DynamicTextArea
                        placeholder='Toggle'
                        value={toggleTitle}
                        setValue={setToggleTitle}
                        ref={ref}
                        onChange={e => {
                            setToggleTitle(e.target.value);
                        }}
                    />
                </div>
                <div className={`${!isOpen ? "hidden" : ""}`}>
                    <DynamicTextArea
                        placeholder='Empty toggle...'
                        value={toggleContent}
                        setValue={setToggleContent}
                        onChange={e => {
                            setToggleContent(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default forwardRef(ToggleListItem);
