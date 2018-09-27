let nextTodoId = 0
export const addTodo = (text) =>
(
{
    type : 'ADD_TODO',
    id : nextTodoId++,
    text
}
)
export const clickTodo = (id) =>
(
{
    type : 'CLICK_TODO',
    id
}
)


