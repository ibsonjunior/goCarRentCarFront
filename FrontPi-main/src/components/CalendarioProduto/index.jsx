// import { Context } from "../Context/Context";
// import React, { useContext, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import './style.css'
import { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme
import * as locales from 'react-date-range/dist/locale';
import { addDays, differenceInDays } from 'date-fns'

export default function CalendarioProduto(){

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const[rent, setRent] = useState(differenceInDays(state[0].endDate,state[0].startDate));
      console.log(state,rent)
      
      const result = rent *300;

     
        const [months, setMonths] = useState(false);
        useEffect(() => {
          const media = window.matchMedia('(min-width: 767px)');
          const listener = () => setMonths(media.matches);
          listener();
          window.addEventListener('resize', listener);
      
          return () => window.removeEventListener('resize', listener);
        }, [months]);

    return(
        <>
            <div className='calendar'>

                <div className='DatasTitulo'><h1>Datas Disponíveis</h1></div>

                <div className='dateRange'>

                            <DateRange
                            editableDateInputs={true}
                            onChange={item => {
                            setState([item.selection])
                            setRent(differenceInDays(item.selection.endDate,item.selection.startDate))
                            }}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                            months={months ? 2 : 1}
                            initialFocusedRang={0}
                            locale={locales.pt}
                            minDate={addDays(new Date(), 0)}
                            maxDate={addDays(new Date(), 180)}
                            scroll={{calendarHeight: 100}}
                            direction="horizontal"
                            />
                        <div className='align'>
                            <div className='s-text'>
                                <h4>Simule seu aluguel para ver os preços exatos :</h4>
                            </div>
                            <div className='simulation'>
                                <div className='result'>
                                    <h4>{rent} Dias x $300,00 = {result},00</h4>
                                    <span>Valor da diária é $300,00</span>
                                </div>
                                <button className='reserva-btn'>Alugue  Agora</button>
                            </div>
                        </div> 
                </div>

            </div>
        </>
    )
}