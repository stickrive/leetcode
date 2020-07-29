import React, {useState} from 'react'

const FindNthDigit = () => {
  const [ShowAnswer, setShowAnswer] = useState(false)

  const title = `数字序列中某一位的数字`
  const titleDetail = `数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。
  请写一个函数，求任意第n位对应的数字。`
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

function findNum(n) {
  // 生成数字串
  let str = ''
  for (let i = 0; i < n; n++) {
    str += i
  }
  console.log(str)
  return str
}

findNum(5)

export default FindNthDigit
