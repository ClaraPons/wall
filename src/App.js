import React from 'react'
import users from './users.json'
import Card from './components/Card'


class App extends React.Component {
  render() {

    return (
      <div className='container'>
      <h1>The Wall</h1>

      <section className='row'>
      {users.map(user => {
        return (
        <Card
          name = {user.name}
          picture = {user.picture}
          about = {user.about}
        />
        )
      })}
      </section>
      </div>
    )
  } 
}

export default App 