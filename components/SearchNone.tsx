import React from 'react'

const SearchNone: React.FC = () => {
    return (
        <div className="text-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="h-12 w-12" src="/img/sun.svg" alt="sun logo" />
            </div>
            <div>
                <p className="pl-8 text-gray-500">No entries found :)</p>
            </div>
        </div>
    );
}

export default SearchNone;