import { defineBuilderConfig, githubRepoSyncPlugin } from '@afilmory/builder'

export default defineBuilderConfig(() => ({
  storage: {
    provider: 's3',
    bucket: 'mmyo-1301064340',
    region: 'ap-shanghai',
    prefix: 'photos/',
    customDomain: 'https://cos.ouo.chat',
  },
  plugins: [
    githubRepoSyncPlugin({
      repo: {
        enable: true,
        url: 'https://github.com/mmyo456/gallery-public',
        token: process.env.GIT_TOKEN,
        branch: process.env.BUILDER_REPO_BRANCH ?? 'main',
      },
    }),
  ],
  performance: {
    worker: {
      enabled: true,
      maxWorkers: 4,
    },
  },
}))