import "./styles.css";
import { useState } from "react";
import { mockData } from "./mockData";

export default function App(){
    const [tab, setTab] = useState(1);


 const activeTab = (tabNumber)=>{
    setTab(tabNumber)
    }

    const mobiles = mockData.filter((product)=> product.item === "mobiles")
    const laptops = mockData.filter((product)=> product.item === "laptops")
    const tv = mockData.filter((product)=> product.item === "tv")

    const data = tab === 1 ? mobiles : tab === 2 ? laptops : tab === 3 ? tv : null;

    return (
        <div className="App">
        <div className="category">
            <div className="mobiles" style={{backgroundColor: tab === 1 ? "yellow" : ""}} onClick={()=> activeTab(1)}>Mobiles</div>
            <div className="laptops" style={{backgroundColor: tab === 2 ? "yellow" : ""}} onClick={()=> activeTab(2)}>Laptops</div>
            <div className="tv" style={{backgroundColor: tab === 3 ? "yellow" : ""}} onClick={()=> activeTab(3)}>TV</div>
        </div>

        <div className="item_div">
        {data && data.map((val)=>{
            return(
                <div>
            <span>
                {val.des}
            </span>
            </div>
           )


        })}
        
        </div>

        </div>
    )
}