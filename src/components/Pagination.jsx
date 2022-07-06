export const Pagination = ({countriesPerPage, totalCountries, paginate, setPages, pages }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
        setPages(i);
    }

    const handlePaginate = (evt, number) => {
        evt.preventDefault();

        paginate(number)
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <a href="!#" className="page-link" onClick={evt => handlePaginate(number, evt)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}