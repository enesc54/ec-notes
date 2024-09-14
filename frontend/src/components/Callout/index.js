import DynamicTextArea from "components/DynamicTextArea";
import IconViewer from "components/IconViewer";
import { FaLightbulb } from "react-icons/fa";
import { useState } from "react";

function Callout(props) {
    const [value, setValue] = useState(props.content || "");
    return (
        <div className='min-h-fit bg-[#252525] rounded-xl p-5 text-white flex items-center gap-2'>
            <IconViewer icon={<FaLightbulb />} />
            <DynamicTextArea
                value={value}
                setValue={setValue}
                placeholder='Type something...'
                onChange={e => {
                    props.onContentChange(e.target.value);
                }}
            />
        </div>
    );
}

export default Callout;
