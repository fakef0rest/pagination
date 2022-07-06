import { useEffect, useState } from "react";
import axios from 'axios';
import { Countries } from "./components/Countries";
import { Pagination } from "./components/Pagination";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const [pages, setPages] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setCountries(res.data)
      setLoading(false)
    }

    getCountries()
  }, [])

  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => {
    if (prev < pages) {
      return prev + 1
    }

    return prev = pages
  })
  const prevPage = () => setCurrentPage(prev => {
    if (prev > 1) {
      return prev - 1
    }

    return prev = 1
  })

  console.log(currentPage)


  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={currentCountry} loading={loading}/>
      <Pagination 
      countriesPerPage={countriesPerPage} 
      totalCountries={countries.length}
      paginate={paginate}
      setPages={setPages}
      pages={pages}
      />

      <button className="btn btn-primary" onClick={prevPage} disabled={currentPage === 1}>Prev Page</button>
      <button className="btn btn-primary ml-2" onClick={nextPage} disabled={currentPage === pages}>Next Page</button>
    </div>
  );
}

export default App;
