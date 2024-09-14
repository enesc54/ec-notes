import { useState, useRef, useEffect } from "react";

function ListView(props) {
    const { item: Item, onContentChange } = props;
    const [data, setData] = useState(props.data);
    const itemRefs = useRef([]);
    const [focusedId, setFocusedId] = useState();

    useEffect(() => {
        const id = focusedId;
        if (itemRefs.current[id]) {
            itemRefs.current[id].focus();
        }
    }, [focusedId]);

    const addItem = () => {
        const id = data?.length;
        setData(data => [...data, { id: id, data: {} }]);
        setFocusedId(id);
    };

    const deleteItem = id => {
        const newData = [...data];
        newData.splice(id, 1);
        setData(newData);
        setFocusedId(id - 1);
    };

    const itemContentChange = (id, newContent) => {
        const updatedData = [...data];
        if (updatedData[id]) {
            updatedData[id].content = newContent;
        }

        setData(updatedData);
    };

    useEffect(() => {
        onContentChange(data);
    }, [data, onContentChange]);

    return (
        <div>
            {data.map((item, index) => (
                <Item
                    ref={el => (itemRefs.current[index] = el)}
                    id={index}
                    data={item?.content}
                    onContentChange={newContent =>
                        itemContentChange(index, newContent)
                    }
                    addItem={addItem}
                    deleteItem={deleteItem}
                />
            ))}
        </div>
    );
}

export default ListView;
