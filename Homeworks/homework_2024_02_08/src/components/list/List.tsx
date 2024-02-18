interface I_Post{
    id: number;
    header: string;
    body: string;
}
interface I_PostListProps{
    posts: I_Post[];
}
function List({posts}: I_PostListProps){
    return(
        <ul className="list">
            {posts.map((post)=>(
                <li key={post.id} className="list-item">
                    <h3>{post.header}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}
export default List;