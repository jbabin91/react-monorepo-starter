/*
This project uses the nx-semantic-release plugin to automate the release process with semantic-release and nx.
The original plugin has some issues with ESM packages, so this we opted to use a forked version of the plugin.
- https://github.com/TheUnderScorer/nx-semantic-release   (original version)
- https://github.com/goestav/nx-semantic-release          (forked version with ESM support)
*/

// Here you can find the available options for the nx-semantic-release plugin.
// options                https://github.com/goestav/nx-semantic-release#available-options
// options.branches       https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#branches
// options.parserOpts     https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser#parseroptions
// options.releaseRules   https://github.com/semantic-release/commit-analyzer#releaserules
module.exports = {
  branches: [
    {
      channel: 'latest',
      name: 'main',
    },
    {
      channel: 'next',
      name: 'next',
      prerelease: 'rc',
    },
    {
      channel: 'canary',
      name: 'canary',
      prerelease: 'canary',
    },
  ],
  changelog: true,
  commitMessage:
    'chore(release): Release ${PROJECT_NAME} v${nextRelease.version} [skip ci]',
  github: true,
  npm: true,
  outputPath: 'dist/packages/${PROJECT_NAME}',
  parserOptions: {
    mergeCorrespondence: ['branch', 'id'],
    mergePattern: /^Merged in (.*) \(pull request #(\d+)\)$/,
  },
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      { section: 'Features', type: 'feat' },
      { section: 'Bug Fixes', type: 'fix' },
      { hidden: true, type: 'chore' },
      { section: 'Documentation', type: 'docs' },
      { hidden: true, type: 'style' },
      { section: 'Refactors', type: 'refactor' },
      { section: 'Build config', type: 'build' },
      { hidden: true, type: 'perf' },
      { hidden: true, type: 'test' },
    ],
  },
  repositoryUrl: 'https://github.com/jbabin91/react-monorepo-starter',
  tagFormat: '${PROJECT_NAME}-${VERSION}',
};
