import React from 'react'

import { ExternalLinks } from '../utils/Constants'

const Footer = () => {
  return (
    <div className="mx-5 sm:mx-10 my-32">
      <div className="flex flex-col sm:flex-row justify-center space-y-5">
        <div className="flex flex-col space-y-5">
          <h3 className="text-3xl text-center sm:text-left font-raleway font-extrabold">
            Tentacles For
            <br />
            The World!
          </h3>
          <div className="flex justify-center space-x-5">
            {ExternalLinks.map(({ link, Icon }, index) => (
              <a key={index} href={link}>
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
        <div className="sm:w-[50rem] sm:pl-48">
          <div className="h-[7.5rem]"></div>
          <div className="h-16 flex text-center">
            <span className="m-auto text-sm">
              {new Date().getFullYear()} · <b>Tentaclesoft</b>. All right
              reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
