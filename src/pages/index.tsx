import React from 'react'

import type { NextPage } from 'next'
import Image from 'next/image'

import { StarIcon, RepoForkedIcon } from '@primer/octicons-react'

import Footer from '../components/Footer'
import { useFetch } from '../hooks/useFetch'
import { LanguageColorClasses } from '../utils/Constants'

const Home: NextPage = () => {
  const { data: repositories } = useFetch('/api/repositories')
  const { data: members } = useFetch('/api/members')

  return (
    <>
      <div className="h-screen">
        <div className="h-[95%] bg-gradient-to-r from-indigo-500/50 via-sky-500/50 to-teal-500/50 bg-animate">
          <div className="h-full flex">
            <div className="m-auto">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-raleway font-extrabold cursor-default select-none">
                tentaclesoft
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-20">
        <div className="flex flex-col justify-center">
          <div className="mx-auto mt-5">
            <h2 className="text-4xl text-center font-raleway font-extrabold">
              Projects
            </h2>
          </div>
          <div className="mx-auto my-10 grid lg:grid-cols-2 gap-2">
            {repositories?.map((repository) => (
              <a
                key={repository.id}
                className="w-96 min-h-[138px] flex flex-col border border-zinc-50/5 hover:bg-white/5 p-3 space-y-3"
                href={repository.url}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="font-semibold text-lg">{repository.name}</h3>
                <p className="text-sm text-white/50 flex-auto text-justify leaging-sm">
                  {repository.description}
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div
                      className="mr-1.5 h-3 w-3 border rounded-full border-transparent"
                      style={{
                        backgroundColor:
                          LanguageColorClasses[
                            repository.language.toLowerCase()
                          ]
                      }}
                    ></div>
                    <span className="text-sm font-light">
                      {repository.language}
                    </span>
                  </div>
                  <div className="text-sm flex space-x-2">
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
        <div className="flex flex-col justify-center">
          <div className="mx-auto mt-5">
            <h2 className="text-4xl text-center font-raleway font-extrabold">
              Team
            </h2>
          </div>
          <div className="flex mx-auto my-10 space-x-3">
            {members?.map((member) => (
              <div
                key={member.id}
                className="p-3 space-y-2 hover:bg-white/5 hover:scale-105 transition delay-75 duration-300 ease-in-out"
              >
                <div className="w-52">
                  <Image
                    src={member.avatar_url}
                    alt={member.username}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center">
                  <a className="text-xl font-bold" href={member.url}>
                    @{member.username}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
