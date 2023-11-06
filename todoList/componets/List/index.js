import Item from "../item";
function List({todos}){
    return(
        <div>
            <ul>
                {
                    todos.map( todo =>{
                        return <Item key={todo.id} {...todo}></Item>
                    })
                }
            </ul>
        </div>
    )
}


export default List;