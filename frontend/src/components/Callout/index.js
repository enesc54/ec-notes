import DynamicTextArea from "components/DynamicTextArea";
import IconViewer from "components/IconViewer";
import { FaLightbulb } from "react-icons/fa";
import { useState } from "react";
function Callout() {
    const [value, setValue] = useState("");
    return (
        <div className='min-h-fit bg-[#252525] rounded-xl p-5 text-white flex items-center'>
            <IconViewer icon={<FaLightbulb />} />
            <DynamicTextArea
                value={value}
                setValue={setValue}
                placeholder='Type something...'
            />
        </div>
    );
}

export default Callout;
