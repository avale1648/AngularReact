import axios from "axios";
import React, { useState } from "react";
interface I_Post{
    id: number;
    title: string;
    body: string;
}
interface I_PostFromProps{
    onAddPost: (post: I_Post) => void;
}
function Form({onAddPost}: I_PostFromProps){
    const [title,setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!title.trim() || !body.trim()) return;
        try{
            const response = await axios.post<I_Post>('https://jsonplaceholder.typicode.com/posts', { header: title, body });
            const newPost = response.data;
            onAddPost(newPost);
            setTitle('');
            setBody('');
        } catch(error){
            console.error('Error added: ', error);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="header" className="label">Заголовок</label>
                <input type="text" className="control" id="header" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="body" className="label">Тело</label>
                <textarea className="control" id="body" value={body} onChange={(e) => setBody(e.target.value)}/>
            </div>
            <button type="submit" className="button button-primary">Добавить</button>
        </form>
    );
}
export default Form;