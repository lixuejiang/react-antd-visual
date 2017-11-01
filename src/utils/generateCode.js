function getAntdCompList(components) {
  let set = new Set()
  components.forEach(component => {
    if (component.type) {
      set.add(component.type)
    }
  })
  return Array.from(set).join(', ')
}
function getRealComponent(component) {
  const props = { ...component.props }
  let propsArr = []
  Object.keys(props).forEach(key => {
    if (props[key].value) {
      if (props[key].valueType === 'bool' || props[key].valueType === 'number') {
        propsArr.push(`${key}={${props[key].value}}`)
      } else {
        propsArr.push(`${key}='${props[key].value}'`)
      }
    }
  })
  if (component.children) {
    let childrens = component.children.map((item, index) => {
      if (typeof item === 'object') {
        const childCom = getRealComponent(item)
        return childCom
      }
      return item
    })
    return `<${component.type} ${propsArr.join(' ')}>\n\t\t\t\t\t${childrens.join('\n\t\t\t\t\t')}\n\t\t\t\t</${component.type}>`
  }
  return `<${component.type} ${propsArr.join(' ')}></${component.type}>`
}

function getCompJSX(components) {
  let arr = []
  components = components.filter(component => {
    return !!component.type
  })
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
