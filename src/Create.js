import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState(``);
    const [body, setBody] = useState(``);
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);//for loading, false is default, because we don't post new blog on startup
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();//important to prevent the page from refreshing when submitting form
        const blog = { title, body, author };
        console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');//this pushes you to the main page after making a blog
        })

        
    }
    
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                <button>Aderged blog</button>
                <button>Add ergg</button>
                {isPending && <button disabled>Adding blog...</button>}
                {/* tests to see if text input works
                <p>{title}</p>
                <p>{body}</p> */}
            </form>
        </div>
     );
}
 
export default Create;