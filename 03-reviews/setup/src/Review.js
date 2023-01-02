import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setindex] = useState(0)
  const {name, job, image, text} = people[index]
  const checkNumber = (number) => {
    
    if(number > people.length - 1){
        return 0
    }
    if(number < 0){
      return people.length - 1
    }
    return number;
  }
  const nextPerson = () =>{
    setindex((index)=> {
      let newIndex = index + 1;
      return checkNumber(newIndex)

    })
  }
  const prevPerson = () =>{
    setindex((index)=> {
      let newIndex = index - 1;
      return checkNumber(newIndex)

    })
  }

  const randomPerson = () =>{
   let randomNumber =  Math.floor(Math.random() * people.length)
   if(randomNumber === index){
     randomNumber = index + 1
   }
   setindex(checkNumber(randomNumber))
  }
  return <div className="review">
            <div className="img-container">
              <img src={image} alt={name} className="person-img" />
              <span className="quote-icon"> 
                <FaQuoteRight />
              </span>
            </div>
            <h4 className="author">{name}</h4>
            <span className="job">{job}</span>
            <span className="info">{text}</span>
            <div className="buttom-container">
              <button className="prev-btn" onClick={prevPerson}>
                <FaChevronLeft/>
              </button>
              <button className="next-btn" onClick={nextPerson}>
                <FaChevronRight/>
              </button>
              <button className="random-btn" onClick={randomPerson}>
                sorprendeme
              </button>
            </div>
         </div>
};

export default Review;
