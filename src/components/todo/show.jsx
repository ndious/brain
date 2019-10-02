import React from 'react'
import marked from 'marked'
import { connect } from 'react-redux'

import Checkbox from './../form/checkbox'
import { toggleTodo } from './../../actions/todo-action'

function renderMarkDown(text) {
  return { __html: marked(text) }
}

const Todo = ({ id, text, complete, toggleTodo }) => (
  <div style={{ paddingTop: '10px' }} className={`todo ${complete ? 'complete' : 'uncomplete'}`}>
    <div style={{ display: 'inline-block', marginRight: '5px', marginLeft: '-23px' }}>
      <Checkbox handleChange={() => toggleTodo(id)} checked={complete} />
    </div>
    <div style={{ display: 'inline-block', fontSize: '22px' }} dangerouslySetInnerHTML={renderMarkDown(text)} />
  </div>
)

export default connect(
  null,
  { toggleTodo }
)(Todo)
