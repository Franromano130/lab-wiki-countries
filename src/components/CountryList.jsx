import { Link } from 'react-router-dom';

const CountryList = ({ countries }) => {
  const getPhoto = (code) => {
    return `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`;
  };

  let sort = (array) => {
    return array.sort((a, b) => a.name.common.localeCompare(b.name.common));
  };

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries ? (
          <>
            {sort(countries).map((country) => {
              return (
                <div
                  className="list-group-item list-group-item-action"
                  key={country.alpha3Code}
                >
                  <Link to={`/${country.alpha3Code}`}>
                    <img src={getPhoto(country.alpha2Code)} alt="flag" />
                    <h2>{country.name.common}</h2>
                  </Link>
                </div>
              );
            })}
          </>
        ) : (
          <h4>Cargando...</h4>
        )}
      </div>
    </div>
  );
};

export default CountryList;
