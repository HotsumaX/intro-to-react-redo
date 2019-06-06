/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('dog');
  const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder={location}
          />
          <button type="button">Submit</button>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            value={animal}
            id="animal"
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(ani => (
              <option key={ani} value={ani}>
                {ani}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option> All</option>
            {breeds.map(breedString => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};
export default SearchParams;
