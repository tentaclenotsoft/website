/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  async redirects () {
    return [
      {
        source: '/github',
        destination: 'https://github.com/tentaclenotsoft',
        permanent: true
      },
      {
        source: '/steam',
        destination: 'https://steamcommunity.com/groups/tentaclesoft',
        permanent: true
      }
    ]
  }
}
