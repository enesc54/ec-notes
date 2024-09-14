import IconViewer from "components/IconViewer";
import { useState, } from "react";

function ToolBarItem(props) {
    const [active, setActive] = useState(false);
    return (
        <div
            className={`flex items-center justify-center h-full w-full rounded-xl ${
                active ? "bg-[#0F1011]" : ""
            }`}
            onClick={() => {
                setActive(active => !active);
            }}
        >
            <IconViewer icon={props.icon} />
        </div>
    );
}

export default ToolBarItem;
