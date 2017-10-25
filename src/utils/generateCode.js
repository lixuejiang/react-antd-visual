function getAntdCompList(components) {
  let set = new Set()
  components.forEach(component => {
    if (component.type) {
      set.add(component.type)
    }
  })
  console.log(Array.from(set), set)
  return Array.from(set).join(', ')
}
function getRealComponent(component) {
  const props = { ...component.props }
  let propsArr = []
  Object.keys(props).forEach(key => {
    if (props[key].value) {
      if (props[key].valueType === 'bool') {
        propsArr.push(`${key}={${props[key].value}}`)
      } else {
        propsArr.push(`${key}='${props[key].value}'`)
      }
    }
  })
  const typeMap = {
    Button: `<Button ${propsArr.join(' ')}>${component.children}</Button>`,
    Input: `<Input {...newProps}></Input>`,
  }
  return typeMap[component.type]
}

function getCompJSX(components) {
  let arr = []
  arr = components.map(component => {
    return `${getRealComponent(component)}`
  })
  return arr.join('\n\t\t\t\t')
}
export default (components) => {
  return `import React, { Component } from 'react'
import {Row, ${getAntdCompList(components)} } from 'antd'


class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Row>
        ${getCompJSX(components)}
      </Row>
    )
  }
}

export default Demo
`
}
