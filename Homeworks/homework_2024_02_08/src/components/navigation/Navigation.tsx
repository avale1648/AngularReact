interface I_PaginationProps{
    currentPage: number;
    pagesLength: number;
    onPageChange: (pageNumber: number) => void;
}
function Navigation({currentPage, pagesLength, onPageChange}: I_PaginationProps){
    const pages = Array.from({length: pagesLength}, (_, i) => i + 1);
    return(
        <nav>
            <ul className="navigation">
                {pages.map((page)=> (
                    <li key={page} className={`page-item ${page === currentPage? 'active': ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page)} disabled={page === currentPage}>{page}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Navigation;