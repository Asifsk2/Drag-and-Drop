import React,{useState} from "react";

const DragDrop = () =>{
    const [items] = useState(['Apple', 'Banana', 'Mango'])
    const [inputValue, setInputValue] = useState("")

    const handleDrageStart = (e, item) =>{
        e.dataTransfer.setData("text/plain", item);
    }

    const handleDrageOver = (e) =>{
        e.preventDefault();
    }

    const handleDrop = (e) =>{
        e.preventDefault();
        const draggedItem = e.dataTransfer.getData("text/plain");
        setInputValue(draggedItem)}

        return (
            <div style = {{ display: "flex", padding: "20px", gap: "20px"}}>
                <div style = {{ border: "2px solid black", padding: "10px", width: "150px" }}>
                    <h4>Drag Items</h4>
                    { items.map((item, index) => (
                        <div 
                        key = {index}
                        draggable
                        onDragStart={ (e) => handleDrageStart(e , item)}
                        // style={{
                        //     padding: "10px",
                        //     margin: "5px",
                        //     backgroundColor: "#f0f0f0",
                        //     border: "1px solid #ddd",
                        //     cursor: "grab",
                        //     textAlign: "center",
                        //   }}
                        >
                         {item}
                        </div>
                    ))}
                </div>

                <div>
                 <h4>Drop Here</h4>
                 <input
                    type="text"
                    value={inputValue}
                    onDragOver={handleDrageOver}
                    onDrop={handleDrop}
                    readOnly
                    style={{
                      width: "200px",
                      height: "40px",
                      fontSize: "16px",
                      textAlign: "center",
                      border: "2px dashed gray",
                      cursor: "pointer",
                     }}
               />
           </div>
       </div>
   )
}

export default DragDrop;