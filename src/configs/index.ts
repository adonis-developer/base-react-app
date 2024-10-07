interface ConfigEnvProperty {
  serverAPI: string | undefined
}

const getConfig = (): ConfigEnvProperty => {
  return {
    serverAPI: process.env.REACT_APP_SERVER_API,
  }
}

const ConfigEnv = getConfig()

export { ConfigEnv }
