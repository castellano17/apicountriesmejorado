import React from "react";

const CountryCard = ({country}) => {
  return (
    <article >
      <div>
        <img src={country.flags.svg} alt={country.flags.alt} />
      </div>
      <section>
        <h3>{country.name.common}</h3>
        <ul>
          <li>
            <span>Population: </span>
            {country.population}
          </li>
          <li>
            <span>Region: </span>
            {country.region}
          </li>
          <li>
            <span>Capital: </span>
            {country.capital?.[0]}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default CountryCard;
