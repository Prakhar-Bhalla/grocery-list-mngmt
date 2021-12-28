import "./GroceryList.css";

export const GroceryList = ({title, func, id}) => {
    const deleteEl = (event) => {
        func(event.target.parentNode.parentNode.childNodes[0].innerText)
    }
    return <tr>
    <td style={{display : "none"}}>{id}</td>
    <td>{title}</td> 
    <td><button onClick={deleteEl}>Purchased</button></td>
    </tr>
}