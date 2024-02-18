import axios from "axios";
import React, { useState } from "react";
interface I_Post{
    id: number;
    header: string;
    body: string;
}
interface I_PostFromProps{
    onAddPost: (post: I_Post) => void;
}
function Form({onAddPost}: I_PostFromProps){
    const [header,setHeader] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!header.trim() || !body.trim()) return;
        try{
            const response = await axios.post<I_Post>('https://jsonplaceholder.typicode.com/posts', { header, body });
            const newPost = response.data;
            onAddPost(newPost);
            setHeader('');
            setBody('');
        } catch(error){
            console.error('Error added: ', error);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="header" className="label">Заголовок</label>
                <input type="text" className="control" id="header" value={header} onChange={(e) => setHeader(e.target.value)}/>
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