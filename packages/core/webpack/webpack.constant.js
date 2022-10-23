import path from 'path'
import packageJSON from '../../../package.json'

export const environmentVariablesFilePaths = {
  development: path.resolve(__dirname, '../.env.develop'),
  test: path.resolve(__dirname, '../.env.test'),
  acceptance: path.resolve(__dirname, '../.env.acceptance'),
  release: path.resolve(__dirname, '../.env.release'),
}

export const micrositeUrlPaths = {
  development: '/',
  test: `/${packageJSON.name}/`,
  acceptance: `/${packageJSON.name}/`,
  release: `/${packageJSON.name}/`,
}

export const micrositeFolderPaths = {
  build: path.resolve(__dirname, '../build'),
  webpack: path.resolve(__dirname, '../webpack'),
  nodeModules: path.resolve(__dirname, '../../../node_modules'),
  public: path.resolve(__dirname, '../public'),
  src: path.resolve(__dirname, '../src'),
}

export const includedSourceFilePaths = [micrositeFolderPaths.src]
