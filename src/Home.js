import BlogList from './BlogsList';
import useFetch from './useFetch';


const Home = () => {
   

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter((blog) => blog.id!== id);
    //     setBlogs(newBlogs);
    // }
    
    const {blogs,isPending} = useFetch('http://localhost:8000/blogs?_sort=id&_order=desc');
    
    return ( 

        <div className="home">
            {/* <BlogList blogs = { blogs } title = "All Blogs" handleDelete = {handleDelete}/>
            <BlogList blogs = { blogs.filter((blog)=> blog.author === 'Protyush') } title = "Protyush's Blog"/> */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = { blogs } title = "All Blogs" />}
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>HomePage</h2>
</div>