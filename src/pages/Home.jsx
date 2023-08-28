import React from 'react'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <>
    <section className='w-full flex-center flex-col px-4 mt-16'>
        <h1 className='head_text text-center'>Dive into Diversity {' '}
            <br />
            <span className="orange_gradient text-center">Learn with SpeakUP</span>
        </h1>
        <p className='desc text-center'>
       From conversational practice to real-world scenarios, we're here to guide you every step of the way towards language proficiency. Start your linguistic adventure today!
        </p>
    </section>
    <Feed />
    </>
  )
}
