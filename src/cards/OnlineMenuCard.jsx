import React from 'react'

const cardProps = { image , children}
const Card = ({...cardProps}) => {
  return (
    <article>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            {children}
        </div>
    </article>
  )
}

export default Card