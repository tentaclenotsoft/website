import React from 'react'

import { useFetch } from '../hooks/useFetch'

const Home: React.FC = () => {
  const { data } = useFetch('/api/repositories')

  return (
    <div className="bg-dark-hard text-white font-mono flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl font-bold text-center">tentaclesoft</h1>
        <div className="mt-10 grid grid-cols-2 gap-4">
          {data?.map((repository) => (
            <div
              key={repository.id}
              className="max-w-xs border rounded-sm border-white border-opacity-10 bg-dark-soft p-3 space-y-3"
            >
              <h3 className="text-white font-semibold text-md">
                <a href={repository.url} target="_blank" rel="noreferrer">
                  {repository.name}
                </a>
              </h3>
              <p className="text-xs text-justify text-gray-400 leading-sm">
                {repository.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
