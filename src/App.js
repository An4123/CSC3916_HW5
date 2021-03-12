import React from 'react'
import './App.css';
import MovieHeader from '../components/MovieHeader'
import Authentication from '../components/authentication'
import {HashRouter, Route} from 'react-router-dom'
import { Provider } from  'react-redux'
import store from '../stores/store'


function App() {        // this is <App/ >
  return (
    <div className='App'>
      <Provider store={store}>
        <HashRouter>
          <div>
            <MovieHeader />
            <Route exact path ='/' render={() =><p />}/>
            <Route exact path ='/' render={() =><p />}/>
            <Route exact path ='/' render={() =><p />}/>
            <Route path ='/signin' render={() => <Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  )
}

export default App;
