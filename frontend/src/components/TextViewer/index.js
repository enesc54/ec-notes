import DynamicTextArea from "components/DynamicTextArea";
import { useState } from "react";

function TextViewer(props) {
    const [value, setValue] = useState(props.content || "");
    return (
        <DynamicTextArea
            value={value}
            setValue={setValue}
            style={props.style}
            onChange={e => {
                props.onContentChange(e.target.value);
            }}
        />
    );
}

export default TextViewer;
