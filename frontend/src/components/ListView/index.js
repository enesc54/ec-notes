import { useState, useRef, useEffect } from "react";

function ListView(props) {
    const Item = props.item;
    const [data, setData] = useState(props.data);
    const itemRefs = useRef([]);
    const [focusedId, setFocusedId] = useState();

    useEffect(() => {
        const id = focusedId;
        if (itemRefs.current[id]) {
            itemRefs.current[id].focus();
        }
    }, [data]);

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

    return (
        <div>
            {data.map(item => (
                <Item
                    ref={el => (itemRefs.current[item.id] = el)}
                    data={item}
                    addItem={addItem}
                    deleteItem={deleteItem}
                />
            ))}
        </div>
    );
}

export default ListView;
