import React from 'react';
import { Card } from './types';

interface CardItemProps {
  card: Card;
}

const Cardtem: React.FC<CardItemProps> = ({ card }) => {
  const { data } = card;
  console.log('card data: ', data);

  return (
    <div className='ml-6 mr-6 mt-3 mb-2'>
      <div className='p-10 border border-gray-300 rounded-xl text-gray-500 flex justify-between items-center'>
        <div>
          <h3 className='text-2xl'>{data.name}</h3>
          <h4 className='mb-2'>{`${data.weather[0].main} - ${data.weather[0].description}`}</h4>
          <h2 className='text-2xl'>{`${data.main.temp} °C`}</h2>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width='60'
            alt='logo'
          />
          <h4 className='ml-4'>{card.time}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cardtem;
