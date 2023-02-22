import {config} from 'dotenv'

config()

const {
  PORT
} = process.env

const AppConfig = {
  PORT
}

export {
  AppConfig
}
