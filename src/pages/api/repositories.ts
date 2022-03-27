import { NextApiRequest, NextApiResponse } from 'next'

import { Octokit } from '@octokit/core'

import { IOrganizationRepository } from '../../interface'

const { GITHUB_ORGANIZATION_NAME } = process.env

let cachedRepositories: IOrganizationRepository[] = null

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  try {
    if (cachedRepositories) {
      return response.status(200).json(cachedRepositories)
    }

    const octokit = new Octokit()
    const { data: _repositories } = await octokit.request(
      'GET /orgs/{org}/repos',
      {
        org: GITHUB_ORGANIZATION_NAME,
        sort: 'updated'
      }
    )

    const repositories = _repositories
      .filter(({ id }) => id !== 341026742)
      .map(
        ({
          id,
          name,
          html_url,
          description,
          language,
          stargazers_count,
          forks
        }) => ({
          id,
          name,
          url: html_url,
          description,
          language,
          stars: stargazers_count,
          forks
        })
      )

    cachedRepositories = repositories

    return response.status(200).json(repositories)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
}
