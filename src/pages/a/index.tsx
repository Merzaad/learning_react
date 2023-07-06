import * as React from 'react'
import './index.css'
import Children from './Children'
import Input from './Input'

const A = () => {
  const [list, setList] = React.useState([{ a: '1' }, { a: '2' }, { a: '3' }, { a: '4' }])
  const [childrenKey, setChilderKey] = React.useState(1)
  return (
    <div className="A">
      <div className="box">
        <Children key={childrenKey}>
          {list.map((item, index) => (
            <div className="box" key={index}>
              <Input defaultValue={item.a} />
              {item.a}
              <button
                onClick={() => {
                  setList((prev) => prev.filter((x, i) => i !== index))
                }}
              >
                delete
              </button>
            </div>
          ))}
        </Children>
        <button onClick={() => setChilderKey(childrenKey + 1)}>reset with key</button>
      </div>
    </div>
  )
}
export default A
