import Bloglist from './Bloglist';
import useFetch from './useFetchy';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading......</div> }
            {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
        </div>
    );
}


export default Home;                                                            