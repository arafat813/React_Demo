import { NavLink , Outlet} from "react-router-dom";

function Home({todos}){
    return(
        <div>
           <h3>我是Home</h3>
           <div>
                <NavLink to='news'>News</NavLink>
                <NavLink to='message'>Message</NavLink>
           </div>
           <div>
                <Outlet></Outlet>
           </div>
        </div>
    )
}


export default Home;