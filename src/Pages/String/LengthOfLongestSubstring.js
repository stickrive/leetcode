import React, {useState} from 'react'

const LengthOfLongestSubstring = () => {
  const [ShowAnswer, setShowAnswer] = useState(false)

  const title = `无重复字符的最长子串`
  const titleDetail = `给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。`
  const answerText = ``
  const answerCode = `function getMaxStr(str) {
        let maxStr = ''
        for (let i = 0; i < str.length; i++) {
          let tempStr = ''
          let restStr = str.slice(i)
          for (let j = 0; j < restStr.length; j++) {
            let item = restStr[j]
            if (tempStr.includes(item)) {
              break
            } else {
              tempStr += item
            }
          }
          if (tempStr.length > maxStr.length) {
            maxStr = tempStr
          }
        }
        return maxStr.length
      }`
  return (
    <div>
      <h4>{title}</h4>
      <p>{titleDetail}</p>
      <code>
        输入: "abcabcbb" 输出: 3 解释: 因为无重复字符的最长子串是
        "abc"，所以其长度为 3。
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

export default LengthOfLongestSubstring
