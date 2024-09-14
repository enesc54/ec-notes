import ToolBarItem from "./ToolBarItem";
import {
    FaPlus,
    FaBold,
    FaItalic,
    FaUnderline,
    FaStrikethrough
} from "react-icons/fa";

function ToolBar(props) {
    return (
        <div className='h-full flex flex-row gap-2 items-center'>
            <ToolBarItem icon={<FaPlus />} />
            <ToolBarItem icon={<FaBold />} />
            <ToolBarItem icon={<FaItalic />} />
            <ToolBarItem icon={<FaUnderline />} />
            <ToolBarItem icon={<FaStrikethrough />} />
        </div>
    );
}

export default ToolBar;
