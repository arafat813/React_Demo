
function Item(props){
    console.log(props)
    return(
        <li style={{listStyle: 'none', width: '300px'}}>
            <label>
                <input type="checkbox" defaultChecked={props.done}/>
                <span>{props.name}</span>
            </label>
            <button style={{display: 'none'}}>删除</button>
        </li>
    )
}


export default Item;