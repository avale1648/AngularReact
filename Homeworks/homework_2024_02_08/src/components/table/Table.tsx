interface I_Post{
    id: number;
    header: string;
    body: string;
}
interface I_PostTableProps{
    posts: I_Post[];
}
function Table({posts}: I_PostTableProps){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Тело</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.header}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Table;