import React, { useState } from 'react';

const Tour = ({id, image, info, price,name, removeTour}) => {
  const [readMore, setReadMore] = useState(false)
  return <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
              </div>
              <span>{readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={()=> setReadMore(!readMore)}> {readMore ? 'ver menos' : 'ver mas'}</button>
              </span>
              <button className="delete-btn" onClick={() => removeTour(id)}>no me interesa</button>
            </footer>
        </article>
};

export default Tour;
