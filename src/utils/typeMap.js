// import React from 'react'
// import { Button } from 'antd'

export function getComponentProps(type) {
  const typeMap = {
    Button: {
      'type': {
        valueType: 'select',
        options: ['default', 'primary', 'danger', 'dashed'],
        value: 'default'
      },
      'htmlType': {
        valueType: 'select',
        options: ['submit', 'reset', 'button'],
        value: 'button'
      },
      'icon': {
        valueType: 'input',
        placeholder: '',
        value: ''
      },
      'shape': {
        valueType: 'select',
        options: ['circle', 'circle-outline', ''],
        value: ''
      },
      'size': {
        valueType: 'select',
        options: ['small', 'large', 'default'],
        value: 'default'
      },
      'loading': {
        valueType: 'bool',
        value: false
      },
      children: ['点击我配置属性']
    },
    Icon: {
      'type': {
        valueType: 'input',
        placeholder: '参考 iconfont.cn',
        value: 'up'
      },
      'spin': {
        valueType: 'bool',
        value: false
      }
    },
    Affix: {
      offsetTop: {
        valueType: 'number',
        placeholder: '数字',
        value: 0
      },
      offsetBottom: {
        valueType: 'number',
        placeholder: '数字',
        value: 0
      },
      children: ['Affix']
    },
    Pagination: {
      current: {
        valueType: 'number',
        placeholder: '数字',
        value: 0
      },
      total: {
        valueType: 'number',
        placeholder: '数字',
        value: 0
      },
      pageSize: {
        valueType: 'number',
        placeholder: '数字',
        value: 0
      },
      showSizeChanger: {
        valueType: 'bool',
        value: false
      },
      showQuickJumper: {
        valueType: 'bool',
        value: false
      },
      size: {
        valueType: 'select',
        options: ['small', 'default'],
        value: 'default'
      },
      simple: {
        valueType: 'bool',
        value: false
      },
    }
  }
  return typeMap[type]
}
