import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [blogs,setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() =>{
        // fetch data from db.json using JSON Server
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
        })
        .catch(err => {
            console.log(err.message);
        })
    },[url]);
    return {blogs, isPending};
}
 
export default useFetch;