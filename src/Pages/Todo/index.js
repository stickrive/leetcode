import React, {useState, useRef, useEffect, useReducer} from 'react'

const TodoList = () => {
  const [TodoList, setTodoList] = useState([])
  const [] = useReducer()
  const inputEle = useRef(null)

  useEffect(() => {
    console.log('componentDidMount')
    // 当useEffect的第二个参数为[],
    // 相当于 componentDidMount
    return () => {
      console.log('componentWillUnmount')
      // useEffect的 第一个参数有 返回函数时，
      // 相当于 componentWillUnmount
    }
  }, [])

  useEffect(() => {
    inputEle.current.value = null
    return () => {
      console.log('componentWillUnmount2')
      // 这相当于 componentWillUnmount
    }
  }, [TodoList])

  const addItem = () => {
    let item = {
      text: inputEle.current.value,
      completed: false,
      createTime: new Date().getTime(),
    }
    setTodoList([...TodoList, item])
  }

  const delItem = (e, index) => {
    e.stopPropagation()
    TodoList.splice(index, 1)
    setTodoList([...TodoList])
  }

  const setItemCompleted = (index) => {
    console.log('冒泡来了？')
    TodoList[index].completed = true
    setTodoList([...TodoList])
  }

  return (
    <div>
      <h5>我将做这些事情</h5>
      <hr />
      <div>
        <input
          placeholder="请填写计划"
          width="200"
          type="text"
          ref={inputEle}
        />{' '}
        <button onClick={addItem}>添加计划</button>
      </div>

      <ul>
        {TodoList && TodoList.length
          ? TodoList.map((v, index) => {
              return (
                <li
                  key={v.createTime}
                  onClick={() => setItemCompleted(index)}
                  style={{
                    cursor: 'pointer',
                    textDecoration: v.completed ? 'line-through' : 'none',
                    marginTop: '20px',
                    width: '500px',
                    backgroundColor: '#eee',
                  }}>
                  {v.text}
                  <button
                    onClick={(e) => delItem(e, index)}
                    style={{
                      marginLeft: '50px',
                      cursor: 'pointer',
                      float: 'right',
                    }}>
                    删除计划
                  </button>
                </li>
              )
            })
          : '暂无计划'}
      </ul>
    </div>
  )
}

export default TodoList
