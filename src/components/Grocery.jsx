import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from 'nanoid'
import "./Grocery.css";

function Grocery() {
    const [list,setList] = useState([]);
    const getData = (listElement) => {
        const inputDetail = {
            title : listElement,
            id : nanoid(6)
        }
        setList([...list,inputDetail]);
    }
    const deleteData = (id) => {
        const updatedList = list.filter((el) => {
            return el.id !== id
        })
        setList([...updatedList]);
    }
    return <>
        <GroceryInput getData={getData}/>
            <table>
            <tbody>
            {list.map((e) => {
                return <GroceryList key={e.id} {...e} func={deleteData}/>
            })}
            </tbody>
            </table>
    </>
}

export default Grocery;