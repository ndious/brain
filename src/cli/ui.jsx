import React from 'react'
import { Text } from 'ink'


const App = ({ name = 'Stranger' }) => (
  <Text>
    Hello, <Text color="green">{name}</Text>
  </Text>
)

export default App
