import React, { useState } from 'react';

const SearchBar = ({ onCitySearch }) => {
    const [city, setCity] = useState("");

    const onSearchSubmit = city => {
        onCitySearch(city);
        setCity('');
    }
    return (
        <div className="p-6 py-6">
            <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex-auto items-center space-x-4">
                {/* <div className="flex-auto"> */}
                    <form onSubmit={e => e.preventDefault()} className="flex">
                        <input
                            className="w-4/5 border border-red-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <button
                            className="mx-auto ml-2 py-2 px-3 border border-red-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            type="button"
                            onClick={() => onSearchSubmit(city)}
                        >
                            Search
                        </button>
                    </form>
                {/* </div> */}
            </div>
        </div>
    );
}
export default SearchBar;