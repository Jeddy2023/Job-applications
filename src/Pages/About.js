import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function About() {
  const [user, setUser] = useState('mario')

  if(!user) {
    return <Navigate to="/" replace={true}/>
  }
  return (
    <div className='about'>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum minus, sapiente numquam repudiandae tempore dolorum nesciunt nam aliquid! Velit sequi enim architecto quo autem repudiandae veritatis beatae perferendis facilis itaque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam impedit pariatur hic modi nobis culpa, inventore voluptate mollitia perspiciatis eum! Ex, recusandae dicta! Eveniet hic impedit nemo omnis natus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil omnis sapiente, cum aliquam, error voluptatem quod, maiores aperiam quaerat tempora iusto excepturi ea ducimus saepe aut a ullam fugit iure.</p>

        <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About