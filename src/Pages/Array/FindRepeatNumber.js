import React, {useState} from 'react'
import {findNum} from '../../Tool/Tool'

const FindRepeatNumber = () => {
  const [ShowAnswer, setShowAnswer] = useState(false)

  const title = `找出数组中重复的数字。`
  const titleDetail = `在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
        数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
        请找出数组中任意一个重复的数字。`
  const answerCode = findNum.toString()
  return (
    <div>
      <h4>{title}</h4>
      <p>{titleDetail}</p>
      <code>const arr = [2, 3, 1, 0, 2, 5, 3]</code>

      <div className="answer">
        <p onClick={() => setShowAnswer(!ShowAnswer)}>点击查看解题思路:</p>
        <div
          style={{
            display: ShowAnswer ? 'block' : 'none',
          }}>
          {`利用对象的特性来解题，循环该数组，每项为item;
          如果 obj[item] === undefined, 说明对象中无此项，那么把该项存入obj;
          直到obj[item] 不等于undefined, 说明item已经存在，直接返回item`}
          {answerCode}
        </div>
      </div>
    </div>
  )
}

export default FindRepeatNumber
