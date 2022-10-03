import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res=>{
        console.log(res)
       }) 
    })
    return(
        <div>
            <ul>
                {
                    posts.map(post =>)
                }
            </ul>


        </div>
    )



}

export default DataFetching;