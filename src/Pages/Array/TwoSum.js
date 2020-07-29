import React, {useState} from 'react'

const TwoSum = () => {
  const [ShowAnswer, setShowAnswer] = useState(false)

  const title = `两数之和`
  const titleDetail = `给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。`
  const answerText = `用对象的方式来存储下一个想要的数据`
  const answerCode = `
    var twoSum = function(nums, target) {
      let obj = {}
      let res = []
      for(let i = 0; i < nums.length; i++) {
        let item = nums[i]
        if(obj[item] !== undefined) {
          res = [obj[item], i]
          return res
        } else {
          obj[target - item] = i
        }
      }
    };
  `
  return (
    <div>
      <h4>{title}</h4>
      <p>{titleDetail}</p>
      <code>
        给定 nums = [2, 7, 11, 15], target = 9 因为 nums[0] + nums[1] = 2 + 7 =
        9 所以返回 [0, 1]
      </code>

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

export default TwoSum
