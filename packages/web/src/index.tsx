import { AppRegistry } from 'react-native'

// import { App } from 'components/src/App'
import App from "./app"

AppRegistry.registerComponent('myprojectname', () => App)
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})
