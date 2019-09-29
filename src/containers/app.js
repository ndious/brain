import React from 'react'
//import './../assets/css/app.css'
import 'semantic-ui-css/semantic.min.css'

// import TodoPage from './../pages/todo-page'
import NotePage from './../pages/note-page'

const App = () => (
  <div className="container" style={{ backgroundColor: 'black', color: 'white', padding: '5% 10%' }}>
    <NotePage />
  </div>
)

export default App
