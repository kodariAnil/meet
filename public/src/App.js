// App.js

import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import {SelectIdProvider} from './context/SelectedTopic' // Import your context

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

function App() {
  return (
    <SelectIdProvider>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/register"
            component={() => <Login topicsList={topicsList} />}
          />
          <Route component={NotFound} />
        </Switch>
      </>
    </SelectIdProvider>
  )
}

export default App
