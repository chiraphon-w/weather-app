import Head from 'next/head'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList'
import openweather from '../pages/api/openweather'
import Swal from 'sweetalert2';

export default function Home() {
 

  const [cards, setCards] = useState([])
  const [data, setData] = useState({})
  const [city, setCity] = useState('')

  const onCitySearch = async city => {
    // set current searching term
    setCity(city)

    // call api
    try {
      const res = await openweather.get('/data/2.5/weather', {
        params: {
          q: city,
          units: 'metric'
        }
      })

      // destructuring array
      const { data } = res
      setData(data)

      // add to cards
      const id = Math.floor(Math.random() * 10000) + 1;
      const dateObj = new Date()
      const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`
      const newCard = { id, time, data };
      
      setCards([newCard, ...cards]);
    }
    catch
    {
      Swal.fire({
        title: 'Error',
        text: 'City not found!',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    }
  }

  const onClearSubmit = () => {
    // clear all history
    setCards([]);
  }

  return (
    <div>
      <Head>
        <title>Daytech Weather App</title>
      </Head>
      <div className="bg-red-300 shadow-md">
        <div className="flow-root">
          <div className="my-5"><header className="mt-6 text-xl text-white text-center font-bold">Daytech Weather App</header></div>
        </div>
      </div>

      <main>
        <SearchBar onCitySearch={onCitySearch} />
        <CardList cards={cards} onClearSubmit={onClearSubmit} />
      </main>
    </div>
  )
}