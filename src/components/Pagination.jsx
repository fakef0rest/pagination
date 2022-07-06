import { Link } from 'react-router-dom';

export const Pagination = ({countriesPerPage, totalCountries, paginate, setPages, pages }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
        setPages(i);
    }
    
    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <Link to="#" className="page-link" onClick={() => paginate(number)}>{number}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}