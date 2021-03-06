export const ADD_TODO = '@@TODO/ADD'
export const addTodo = (text, project) => ({
  type: ADD_TODO,
  text,
  project,
})

export const REMOVE_TODO = '@@TODO/REMOVE'
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
})

export const TOGGLE_TODO = '@@TODO/TOGGLE'
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
})

export const SWIPE_TODO_ORDER = '@@TODO/SWIPE_ORDER'
export const swipeTodoOrder = (from, to) => ({
  type: SWIPE_TODO_ORDER,
  from,
  to,
})

export const NEW_COLLECT = '@@TODO/NEW_COLLECT'
export const newCollection = () => ({
  type: NEW_COLLECT,
})
