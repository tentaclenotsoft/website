import React from 'react'

import { StarIcon, RepoForkedIcon } from '@primer/octicons-react'

import { useFetch } from '../hooks/useFetch'

const Home: React.FC = () => {
  const { data } = useFetch('/api/repositories')

  return (
    <div className="bg-dark-hard text-white font-sans flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl font-thin text-center cursor-default">
          tentaclesoft
        </h1>
        <div className="my-4 font-thin flex justify-center gap-2">
          <a
            className="border-b border-transparent hover:border-white"
            href="https://github.com/tentaclenotsoft"
          >
            GitHub
          </a>
          <a
            className="border-b border-transparent hover:border-white"
            href="https://steamcommunity.com/groups/tentaclesoft"
          >
            Steam Group
          </a>
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
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <span
                    className={`mr-1.5 h-3 w-3 border rounded-full border-transparent bg-lang-${repository.language.toLowerCase()}`}
                  ></span>
                  <span className="">{repository.language}</span>
                </div>
                <div className="h-4 pt-1 text-xs flex space-x-2">
                  {repository.stars > 0 && (
                    <span>
                      <StarIcon size={16} /> {repository.stars}
                    </span>
                  )}
                  {repository.forks > 0 && (
                    <span>
                      <RepoForkedIcon size={16} /> {repository.forks}
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
