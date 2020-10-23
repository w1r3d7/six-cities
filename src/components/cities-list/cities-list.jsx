import React from 'react';
import PropTypes from 'prop-types';
import {City} from '../../constants';

const LOCATIONS_ITEM_ACTIVE_CLASS = `tabs__item--active`;

const getLocationsItemTemplate = (city, currentCity, handleCityClick) => {
  const isActiveItem = city === currentCity;

  return (
    <li className="locations__item" key={city}>
      <a className={`locations__item-link tabs__item ${isActiveItem ? LOCATIONS_ITEM_ACTIVE_CLASS : ``}`}
        href="#"
        onClick={handleCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};


const CitiesList = ({currentCity, handleCityClick}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(City).map((city) => getLocationsItemTemplate(city, currentCity, handleCityClick))}
      </ul>
    </section>
  </div>
);

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  handleCityClick: PropTypes.func.isRequired,
};

export default CitiesList;