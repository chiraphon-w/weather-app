import React from 'react';
import Cardtem from './CardItem';
import SearchNone from './SearchNone';
import { Card } from './types';

interface CardListProps {
  cards: Card[]; //cards = [{1,"sdsad"}, {...}]; string[] >> ["cx", "sdasd"]
  onClearSubmit: () => void;
}

const CardList: React.FC<CardListProps> = ({ cards, onClearSubmit }) => {
    const hasHistory = cards.length > 0;
  const headerText = hasHistory ? `Recent Search: ${cards.length}` : 'No search history';

  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex-auto items-center space-x-4'>
      <div className='flex justify-between ml-6 mr-6 '>
        <h1 className='text-gray-500'>{headerText}</h1>
        {hasHistory && <button
          className='ml-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          type='button'
          onClick={onClearSubmit}
        >
          Clear
        </button>}
      </div>
      {cards.length > 0 ? (
        cards.map((card) => {
          return <Cardtem key={card.id} card={card} />;
        })
      ) : (
        <SearchNone />
      )}
    </div>
  );
};

export default CardList;
