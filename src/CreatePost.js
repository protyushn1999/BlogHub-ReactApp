import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();
    //console.log(title, body, author);

    function addTitle(e){
        setTitle(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('New blog added');
            console.log(blog);
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create-post">
            <h2 style={{
                fontSize: '25px',
                margin: '0 auto',
                fontWeight: '400',
                padding: '10px',
                textAlign: 'center',
            }}>Create your own blog</h2>

            <div className="create-blog">
                <form onSubmit={handleSubmit}>
                    <label>Blog Title :</label>
                    <input type="text" 
                    value={title}
                    onChange = {addTitle}
                    required/>
                    <label>Blog Body :</label>
                    <textarea cols="30" rows="10" 
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}
                    required></textarea>
                    <label>Author :</label>
                    <input  type="text"
                    value={author}
                    onChange = {(e) => setAuthor(e.target.value)}
                    required/>
                    { !isPending && <button className= "btn" type="submit">Create</button>}
                    { isPending && <button  className = "btn" type="submit" disabled>Creating...</button>}
                </form>
            </div>
            
        </div>
    );
}
 
export default CreatePost;