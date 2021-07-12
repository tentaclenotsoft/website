import React from 'react'

import { useFetch } from '../hooks/useFetch'

const Home: React.FC = () => {
  const { data } = useFetch('/api/repositories')

  return (
    <div className="bg-dark-hard text-white font-sans flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl font-thin text-center">tentaclesoft</h1>
        <div className="mt-4 grid grid-cols-2 gap-1">
          {data?.map((repository) => (
            <a
              key={repository.id}
              className="w-64 bg-dark-soft border border-transparent hover:border-gray-200 hover:border-opacity-25 p-3 space-y-3"
              href={repository.url}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-white font-semibold text-md">
                {repository.name}
              </h3>
              <p className="text-xs text-justify text-gray-400 leading-sm">
                {repository.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
