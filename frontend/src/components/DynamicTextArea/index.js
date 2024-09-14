import { useEffect, useState, useRef } from "react";

import { forwardRef, useImperativeHandle } from "react";

function DynamicTextArea(props, ref) {
    const { style } = props;
    var [textStyle, setTestStyle] = useState("");

    useEffect(() => {
        if (style?.bold) {
            setTestStyle(textStyle => textStyle + "font-bold ");
        }
        if (style?.italic) {
            setTestStyle(textStyle => textStyle + "italic ");
        }
    }, [style]);

    const { value, setValue } = props;
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            localRef.current.focus();
        },
        getValue: () => {
            return localRef.current.value;
        }
    }));

    const handleChange = e => {
        setValue(e.target.value);
        resizeTextarea();
        props.onChange(e);
    };

    const resizeTextarea = () => {
        const textarea = localRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
    return (
        <textarea
            ref={localRef}
            value={value}
            onChange={handleChange}
            rows='1'
            placeholder={props.placeholder}
            style={{ fontSize: style?.fontSize }}
            className={`${textStyle} w-full bg-transparent overflow-hidden whitespace-nowrap resize-none focus:outline-none`}
        />
    );
}

export default forwardRef(DynamicTextArea);
