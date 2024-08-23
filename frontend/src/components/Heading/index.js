import DynamicTextArea from "components/DynamicTextArea";
import { useEffect, useState } from "react";

function Heading(props) {
    const { type } = props;
    const [fontSize, setFontSize] = useState();
    const [value, setValue] = useState("");
    useEffect(() => {
        switch (type) {
            case "h1":
                setFontSize("36px");
                break;
            case "h2":
                setFontSize("33px");
                break;
            case "h3":
                setFontSize("30px");
                break;
            case "h4":
                setFontSize("27px");
                break;
            case "h5":
                setFontSize("24px");
                break;
            case "h6":
                setFontSize("21px");
                break;
            default:
                setFontSize("18px");
        }
    }, [type]);
    return (
        <DynamicTextArea
            value={value}
            setValue={setValue}
            style={{
                bold: true,
                fontSize: fontSize
            }}
        />
    );
}

export default Heading;
