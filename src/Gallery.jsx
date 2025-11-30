import { CircularProgress } from "@mui/material";
import { use, useEffect, useState } from "react";
import Picture from "./Picture";

export default function Gallery() {


    let [arr, setArr] = useState([]);
    let [status, setStaus] = useState(1);

    useEffect(() => {
        setStaus(2);//הלכתי להביא מהשרת

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setArr(data))
            .finally(() => setStaus(3));//סיימתי להביא מהשרת
    }, [])
    return <div>
        <h1>Gallery</h1>
        {status === 1 && <h2>Not started</h2>}
        {status === 2 &&      <CircularProgress />}
        <ul style={{display:"grid" , "gridTemplateColumns":"1fr 1fr 1fr" , gap:"5px",padding:0, gridAutoRows:"500px" ,listStyleType:"none"}}>
            {arr.map((item) => <li key={item.id}><Picture pic={item}/></li>)}
        </ul>
    </div>

}