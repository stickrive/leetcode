import React, {useState} from 'react'

const ReplaceSpace = () => {
  const [ShowAnswer, setShowAnswer] = useState(false)

  const title = `替换空格`
  const titleDetail = `请实现一个函数，把字符串 s 中的每个空格替换成"%20"。`
  const answerText = ``
  return (
    <div>
      <h4>{title}</h4>
      <p>{titleDetail}</p>
      <code>const str = "We are happy."</code>

      <div className="answer">
        <p onClick={() => setShowAnswer(!ShowAnswer)}>点击查看解题思路:</p>
        <div
          style={{
            display: ShowAnswer ? 'block' : 'none',
          }}>
          {answerText}
        </div>
      </div>
    </div>
  )
}

const str = 'We are happy.'

function replaceSpaceFunc(str) {
  const reg = /\s/g
  return str.replace(reg, '%20')
}

export default ReplaceSpace
