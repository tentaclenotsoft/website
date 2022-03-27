import { NextApiRequest, NextApiResponse } from 'next'

import { Octokit } from '@octokit/core'

import { IOrganizationMember } from '../../interface'

const { GITHUB_ORGANIZATION_NAME } = process.env

let cachedMembers: IOrganizationMember[] = null

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  try {
    if (cachedMembers) {
      return response.status(200).json(cachedMembers)
    }

    const octokit = new Octokit()
    const { data: _members } = await octokit.request(
      'GET /orgs/{org}/members',
      {
        org: GITHUB_ORGANIZATION_NAME
      }
    )

    const members = _members.map(({ id, login, html_url, avatar_url }) => ({
      id,
      username: login,
      url: html_url,
      avatar_url
    }))

    cachedMembers = members

    return response.status(200).json(members)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
}
