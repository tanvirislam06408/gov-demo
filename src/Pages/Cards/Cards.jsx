import React, { use } from 'react';
import Card from '../Card';
const promis = fetch('/cards.json').then(res=>res.json());

const Cards = () => {
    const data=use(promis);
    console.log(data);
    
    return (
        <div className='mt-8'>
          <div className='grid grid-cols-3 gap-10 box-border p-3.5 '>
            {
            data.map(card=>  <Card key={card.id} card={card}></Card>)
          }
          </div>
        </div>
    );
};

export default Cards;