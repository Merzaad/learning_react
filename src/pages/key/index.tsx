import * as React from 'react'
import './index.css'
import Children from './Children'
import Input from './Input'
import Box from '../../components/Box'
import Button from '../../components/Button'

const Key = () => {
  const [list, setList] = React.useState([{ a: '1' }, { a: '2' }, { a: '3' }, { a: '4' }])
  const [childrenKey, setChildrenKey] = React.useState(1)
  return (
    <div className="A">
      <Box>
        <Children key={childrenKey}>
          {list.map((item, index) => (
            <Box key={index}>
              <Input defaultValue={item.a} />
              {item.a}
              <Button
                onClick={() => {
                  setList((prev) => prev.filter((x, i) => i !== index))
                }}
              >
                delete
              </Button>
            </Box>
          ))}
        </Children>
        <Button onClick={() => setChildrenKey(childrenKey + 1)}>reset with key</Button>
      </Box>
    </div>
  )
}
export default Key
