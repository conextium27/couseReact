import React from 'react';

const List = ({personas}) => {
  return (
    <>
      {personas.map((persona ) =>{
        const { id, name, age, image } = persona;
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <span>{age} años</span>
            </div>
          </div>

        );
      })}
    </>
  );
};

export default List;
