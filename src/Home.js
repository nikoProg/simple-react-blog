//import { useEffect, useState } from 'react';
// this import is redundant because it is already in useFetch.js

import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    //let name = 'mario';
    //const [name, setName] = useState('mario');
    //const [age, setAge] = useState(25);
    
    /*const handleClick = () => {
        setName('luigi');
        setAge(30);
    }    
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }*/
    /* const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]); */
    
    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }*/
    //[name]) // if you use something in this array, its changes will be followed by useEffect and triggers this function
    const { data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="all blogs!" /*handleDelete={handleDelete}*/></BlogList>}
            {/* <button onClick={() => setName('luigi')}>change name</button> 
            <p>{ name }</p>*/}
            
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"></BlogList>*/    }
            {/* <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
      );
}
 
export default Home;