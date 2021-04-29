
import React from 'react';
import Cardtem from './CardItem';
import SearchNone from './SearchNone';

interface CardListProps {
    cards: {
        id: number;
        data: {
            name: string;
            weather: {
                main: string;
                description: string;
                icon: string;
            }[];
            main: {
                temp: number;
            }
        };
        time: string;
    }[];    //cards = [{1,"sdsad"}, {...}]; string[] >> ["cx", "sdasd"]
    onClearSubmit: () => void;
}

const CardList: React.FC<CardListProps> = ({ cards, onClearSubmit }) => {
    let itemList: JSX.Element | JSX.Element[] = <SearchNone />

    if(cards.length > 0){
        itemList = cards.map( card => {
            return <Cardtem key={card.id} card={card} />
        })
    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex-auto items-center space-x-4">
            <div className="flex justify-between ml-6 mr-6 ">
                <h1 className="text-gray-500">Recent Search: {cards.length}</h1>
                <button 
                        className="ml-2 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        type="button"
                        onClick={ () => onClearSubmit() }
                    >
                    Clear
                </button>            
            </div>
            {itemList}
        </div>
    );
}

export default CardList;