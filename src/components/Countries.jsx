export const Countries = ({ countries, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="list-group mb-2">
            {countries.map((country, i) => (
                <li className="list-group-item" key={i}>
                    {country.title}
                </li>
            ))}
        </ul>
    )
}