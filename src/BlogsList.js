import { Link } from 'react-router-dom';

// props - blogs, title and function like handleDelete
const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h2 style={{
                fontSize: '25px',
                margin: '0 auto',
                fontWeight: '400',
                padding: '20px',
            }}>{title}</h2>
            {
                blogs.map((blog) => (
                    
                        <div className="blog_preview" key={blog.id}>
                            <Link to ={`/blog/${blog.id}`}>
                                {blog.title}
                                <p>Written by: { blog.author }</p>
                            </Link>
                        </div>
                   
                    
                ))
            }
        </div>
    );
}
 
export default BlogList;