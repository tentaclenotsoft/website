import React from 'react'

import { StarIcon, RepoForkedIcon } from '@primer/octicons-react'

import { useFetch } from '../hooks/useFetch'
import { ExternalLinks } from '../utils/Constants'

const Home: React.FC = () => {
  const { data } = useFetch('/api/repositories')

  return (
    <div className="bg-dark-hard text-white font-sans flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl font-thin text-center cursor-default">
          tentaclesoft
        </h1>
        <div className="my-4 font-thin flex justify-center gap-2">
          {ExternalLinks.map(({ name, link }, index) => (
            <a
              key={index}
              className="border-b border-transparent hover:border-white"
              href={link}
            >
              {name}
            </a>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-1">
          {data?.map((repository) => (
            <a
              key={repository.id}
              className="w-64 flex flex-col bg-dark-soft border border-transparent hover:border-gray-200 hover:border-opacity-25 p-3 space-y-3"
              href={repository.url}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-white font-semibold text-md">
                {repository.name}
              </h3>
              <p className="text-xs flex-auto text-justify text-gray-400 leading-sm">
                {repository.description}
              </p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span
                    className={`mr-1.5 h-3 w-3 border rounded-full border-transparent bg-lang-${repository.language.toLowerCase()}`}
                  >
                  </span>
                  <span className="text-xs font-light">
                    {repository.language}
                  </span>
                </div>
                <div className="text-xs flex space-x-2">
                  {repository.stars > 0 && (
                    <span>
                      <StarIcon size={14} /> {repository.stars}
                    </span>
                  )}
                  {repository.forks > 0 && (
                    <span>
                      <RepoForkedIcon size={14} /> {repository.forks}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
