import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [thisCountry, setThisCountry] = useState(null);

  const { countryId } = useParams();

  const findCountry = (code) => {
    return countries.find((country) => country.alpha3Code === code);
  };

  const getPhoto = (code) => {
    return `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`;
  };

  useEffect(() => {
    setThisCountry(findCountry(countryId));
  }, [countryId]);

  return (
    <div className="col-7">
      {thisCountry ? (
        <>
          <img
            src={getPhoto(thisCountry.alpha2Code.toLowerCase())}
            alt="country"
          />
          <h1>{thisCountry.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{thisCountry.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {thisCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Frontera</td>
                <td>
                  {thisCountry.borders.length ? (
                    <ul>
                      {thisCountry.borders.map((border) => {
                        return (
                          <li key={border}>
                            <Link
                              className="list-group-item list-group-item-action"
                              to={`/${border}`}
                            >
                              {findCountry(border).name.common}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <h4>No hay paises fronterizos</h4>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h4>Cargando...</h4>
      )}
    </div>
  );
};

export default CountryDetails;
