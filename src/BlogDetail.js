import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {

    const { id } = useParams();
    const { blogs, isPending } = useFetch('http://localhost:9090/blogs/' + id);
    const history = useHistory();


    function handleClick(e){
        fetch('http://localhost:9090/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted');
            history.push('/');
        })
    }

    return (
        <div className="blog-detail">
            
            {isPending && <div>Loading...</div>}
            <div className="blog-detail">
                <h2>{blogs && blogs.title }</h2>
                <p>Written by: { blogs && blogs.author }</p>
                <p>{ blogs && blogs.body }</p>
                <button className= "btn" onClick={handleClick}>Delete</button>
            </div>
        </div>
    );
}
 
export default BlogDetail;