import { useState } from "react";
import User from "./User";

const SearchUser=() =>{
    let[username,setUsername]=useState();

    let handleSubmit=(event)=>{
        event.preventDefault();
        setUsername(event.target[0].value);
    }
    return(
        <>
        <div className="container">
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div className="mt-2">
                    <label htmlFor="name" className="form-label">Enter Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" id="name"></input>
                </div>

                <div className="mt-2">
                    <button type="submit" className="btn btn-primary">get</button>
                </div>
            </form>
        </div>
        <div>
            <User username={username}/>
        </div>
        </>
    )
}

export default SearchUser;