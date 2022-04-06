import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import type { NextPage } from 'next'
import Link from 'next/link'

const NotFound: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex">
        <div className="m-auto">
          <div className="flex flex-col justify-center text-center">
            <span className="text-sm font-bold uppercase">404 Error</span>
            <h1 className="pb-2 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500/50 via-sky-500/50 to-teal-500/50 bg-animate">
              Page not found.
            </h1>
            <p className="font-light">{`Sorry, we couldn't find the page you're looking for.`}</p>
            <div className="flex justify-center">
              <button className="flex jutify-center mt-5 p-2 font-semibold items-center space-x-1.5 hover:text-white/75">
                <Link href="/">Go back home</Link>
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
