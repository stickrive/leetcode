import React, {useState} from 'react'

const MajorityElement = () => {
  const [ShowAnswer, setShowAnswer] = useState(false)

  const title = `数组中出现次数超过一半的数字`
  const titleDetail = `数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。`
  const answerText = `排序拿到有顺序的数组，然后取中间的值`
  const answerCode = getMaxTimeNum.toString()
  return (
    <div>
      <h4>{title}</h4>
      <p>{titleDetail}</p>
      <code>输入: [1, 2, 3, 2, 2, 2, 5, 4, 2] 输出: 2</code>

      <div className="answer">
        <p onClick={() => setShowAnswer(!ShowAnswer)}>点击查看解题思路:</p>
        <div
          style={{
            display: ShowAnswer ? 'block' : 'none',
          }}>
          {answerText}
          <br />
          {answerCode}
        </div>
      </div>
    </div>
  )
}

const getMaxTimeNum = (arr) => {
  const temp = arr.sort()
  return temp[Math.floor(temp.length / 2)]
}

export default MajorityElement
