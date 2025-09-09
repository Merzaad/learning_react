import * as React from 'react'

const Input = ({ defaultValue }: { defaultValue: string }) => {
  React.useEffect(() => {
    // default value is item.a and it must not change but it will if use index as key
    console.log(`defaultValue: ${defaultValue}`)
  }, [defaultValue])
  return <input defaultValue={defaultValue} data-value={defaultValue} />
}

export default Input
