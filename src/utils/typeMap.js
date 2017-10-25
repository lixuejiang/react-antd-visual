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
      }
    },
  }
  return typeMap[type]
}
