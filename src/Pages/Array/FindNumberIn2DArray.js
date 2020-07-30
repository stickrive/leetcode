import React, {useState} from 'react'
import {productNumArr} from '../../Tool/Tool'

const FindNumberIn2DArray = () => {
  const [ShowAnswer, setShowAnswer] = useState(false)

  const title = `二维数组中的查找`
  const titleDetail = `在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。`
  return (
    <div>
      <h4>{title}</h4>
      <p>{titleDetail}</p>
      <code>
        const arr = [ [1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24], [18, 21, 23, 26, 30] ]
      </code>

      <div className="answer">
        <p onClick={() => setShowAnswer(!ShowAnswer)}>点击查看解题思路:</p>
        <div
          style={{
            display: ShowAnswer ? 'block' : 'none',
          }}>{`利用对象的特性来解题，循环该数组，每项为item;
          如果 obj[item] === undefined, 说明对象中无此项，那么把该项存入obj;
          直到obj[item] 不等于undefined, 说明item已经存在，直接返回item`}</div>
      </div>
    </div>
  )
}

const arr = [
  [1, 4, 7, 11, 15, 17],
  [2, 5, 8, 12, 19, 23],
  [3, 6, 9, 16, 22, 30],
  [10, 13, 14, 20, 24, 32],
  [18, 21, 23, 26, 30, 38],
  [25, 28, 29, 36, 50, 55],
  [29, 38, 49, 55, 80, 105],
]

function findNum1(arr, target) {
  let res = arr.flat()
  if (res.includes(target)) {
    return true
  } else {
    return false
  }
}

// findNum1(arr, 5)

export default FindNumberIn2DArray
