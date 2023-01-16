import React from 'react'

export default function Review(props) {
  const { drinks, food, outlets, parking, sound, space, wifi, username } = props;
            
  return (
    <div className='review-container'>
        {Object.keys(props).map(prop => {
            return (<div>{prop}:{props[prop]}</div>);
        })}
    </div>
    
  )
}