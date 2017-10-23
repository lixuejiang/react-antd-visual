import React, { Component } from 'react'
import { Row, Col, Menu, Icon, Button, Input, Collapse, Tabs } from 'antd'
import MonacoEditor from 'react-monaco-editor'
import { DragSourceWrapper, DropTargetWrapper } from '../utils/drag-drop/wrapper-component'
import withDragDropContext from '../utils/drag-drop/withDragDropContext'
const Panel = Collapse.Panel
const SubMenu = Menu.SubMenu
const TabPane = Tabs.TabPane

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      components: [],
      currentProps: [{
        key: 'type',
        value: 'primary',
      }],
      currentEvents: [],
      currentStyles: [],
      code: '// type your code...',
    }
    this.moveComponent = this.moveComponent.bind(this)
  }
  moveComponent(e) {
    const type = e.type
    const key = new Date().getTime()
    this.setState({
      components: [...this.state.components, { type, props: { key }, children: '按钮' }]
    })
  }
  setCurrentElment(index) {
    // let props = this.state.components[index].props
    // this.setState({
    //   currentProps: props
    // })
  }
  getRealComponent(component, index) {
    const typeMap = {
      Button: {
        element: <Button {...component.props} onClick={this.setCurrentElment.bind(this, index)}>{component.children}</Button>,
        props: ['type', 'htmlType', 'icon', 'shape', 'size', 'loading'],
        event: ['onClick']
      },
      Input: {
        element: <Input {...component.props}></Input>,
        props: ['type', 'htmlType', 'icon', 'shape', 'size', 'loading'],
        event: ['onClick']
      }
    }
    return typeMap[component.type]
  }
  handlePropsChange(key, index, e) {
    let props = [this.state.currentProps]
    props[index][key] = e.target.value.trim()
    this.setState({
      currentProps: [...props]
    })
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor)
    editor.focus()
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e)
  }
  render() {
    const code = this.state.code
    const options = {
      selectOnLineNumbers: true
    }
    return (
      <Row style={{ marginTop: '10px' }}>
        <Col span={4}>
          <h2 style={{ textAlign: 'center' }}>组件区</h2>
          <Menu
            onClick={this.handleClick}
            style={{ width: 240 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='inline'
          >
            <SubMenu key='sub1' title={<span><Icon type='mail' /><span>General</span></span>}>
              <Menu.Item key='1'><DragSourceWrapper moveComponent={this.moveComponent} type='Button'>Button 按钮</DragSourceWrapper></Menu.Item>
              <Menu.Item key='2'>Icon 图标</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' title={<span><Icon type='appstore' /><span>Layout</span></span>}>
              <Menu.Item key='5'>Grid 栅格</Menu.Item>
              <Menu.Item key='6'>Layout 布局</Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' title={<span><Icon type='setting' /><span>Navigation</span></span>}>
              <Menu.Item key='sub49'>Affix固钉</Menu.Item>
              <Menu.Item key='sub410'>Breadcrumb面包屑</Menu.Item>
              <Menu.Item key='sub411'>Dropdown下拉菜单</Menu.Item>
              <Menu.Item key='sub412'>Menu导航菜单</Menu.Item>
              <Menu.Item key='sub413'>Pagination分页</Menu.Item>
              <Menu.Item key='sub414'>Steps步骤条</Menu.Item>
            </SubMenu>
            <SubMenu key='sub5' title={<span><Icon type='setting' /><span>Data Entry</span></span>}>
              <Menu.Item key='sub50'>AutoComplete自动完成</Menu.Item>
              <Menu.Item key='sub51'>Cascader级联选择</Menu.Item>
              <Menu.Item key='sub52'>Checkbox多选框</Menu.Item>
              <Menu.Item key='sub53'>DatePicker日期选择框</Menu.Item>
              <Menu.Item key='sub54'>Form表单</Menu.Item>
              <Menu.Item key='sub55'>InputNumber数字输入框</Menu.Item>
              <Menu.Item key='sub56'><DragSourceWrapper moveComponent={this.moveComponent} type='Input'>Input输入框</DragSourceWrapper></Menu.Item>
              <Menu.Item key='sub57'>Mention提及</Menu.Item>
              <Menu.Item key='sub58'>Rate评分</Menu.Item>
              <Menu.Item key='sub59'>Radio单选框</Menu.Item>
              <Menu.Item key='sub510'>Select选择器</Menu.Item>
              <Menu.Item key='sub511'>Slider滑动输入条</Menu.Item>
              <Menu.Item key='sub512'>Switch开关</Menu.Item>
              <Menu.Item key='sub513'>TreeSelect树选择</Menu.Item>
              <Menu.Item key='sub514'>TimePicker时间选择框</Menu.Item>
              <Menu.Item key='sub515'>Transfer穿梭框</Menu.Item>
              <Menu.Item key='sub516'>Upload上传</Menu.Item>
            </SubMenu>
            <SubMenu key='sub6' title={<span><Icon type='setting' /><span>Data Display</span></span>}>
              <Menu.Item key='sub50'>Avatar头像</Menu.Item>
              <Menu.Item key='sub51'>Badge徽标数</Menu.Item>
              <Menu.Item key='sub52'>Calendar日历</Menu.Item>
              <Menu.Item key='sub53'>Card卡片</Menu.Item>
              <Menu.Item key='sub54'>Carousel走马灯</Menu.Item>
              <Menu.Item key='sub55'>Collapse折叠面板</Menu.Item>
              <Menu.Item key='sub56'>Popover气泡卡片</Menu.Item>
              <Menu.Item key='sub57'>Tooltip文字提示</Menu.Item>
              <Menu.Item key='sub58'>Table表格</Menu.Item>
              <Menu.Item key='sub59'>Tabs标签页</Menu.Item>
              <Menu.Item key='sub510'>Tag标签</Menu.Item>
              <Menu.Item key='sub511'>Timeline时间轴</Menu.Item>
              <Menu.Item key='sub512'>Tree树形控件</Menu.Item>
              <Menu.Item key='sub60'>Avatar头像</Menu.Item>
              <Menu.Item key='sub61'>Badge徽标数</Menu.Item>
              <Menu.Item key='sub62'>Calendar日历</Menu.Item>
              <Menu.Item key='sub63'>Card卡片</Menu.Item>
              <Menu.Item key='sub64'>Carousel走马灯</Menu.Item>
              <Menu.Item key='sub65'>Collapse折叠面板</Menu.Item>
              <Menu.Item key='sub66'>Popover气泡卡片</Menu.Item>
              <Menu.Item key='sub67'>Tooltip文字提示</Menu.Item>
              <Menu.Item key='sub68'>Table表格</Menu.Item>
              <Menu.Item key='sub69'>Tabs标签页</Menu.Item>
              <Menu.Item key='sub610'>Tag标签</Menu.Item>
              <Menu.Item key='sub611'>Timeline时间轴</Menu.Item>
              <Menu.Item key='sub612'>Tree树形控件</Menu.Item>
            </SubMenu>
            <SubMenu key='sub7' title={<span><Icon type='setting' /><span>Feed back</span></span>}>
              <Menu.Item key='sub70'>Alert警告提示</Menu.Item>
              <Menu.Item key='sub71'>Modal对话框</Menu.Item>
              <Menu.Item key='sub72'>Message全局提示</Menu.Item>
              <Menu.Item key='sub73'>Notification通知提醒框</Menu.Item>
              <Menu.Item key='sub74'>Progress进度条</Menu.Item>
              <Menu.Item key='sub75'>Popconfirm气泡确认框</Menu.Item>
              <Menu.Item key='sub76'>Spin加载中</Menu.Item>
            </SubMenu>
            <SubMenu key='sub8' title={<span><Icon type='setting' /><span>Other</span></span>}>
              <Menu.Item key='sub80'>Anchor锚点</Menu.Item>
              <Menu.Item key='sub81'>BackTop回到顶部</Menu.Item>
              <Menu.Item key='sub82'>LocaleProvider国际化</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
        <Col span={14}>
          <h2>页面区</h2>
          <Tabs type='card'>
            <TabPane tab='页面' key='1'>
              <Row style={{ borderRight: '1px solid #ddd', marginTop: '10px' }}>
                <Col>
                  <DropTargetWrapper style={{ width: '100%', height: '300px', backgroundColor: '#eaeaea' }}>
                    {this.state.components.map((component, index) => {
                      return this.getRealComponent(component, index).element
                    })}
                  </DropTargetWrapper>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab='代码' key='2'>
              <Row>
                <Col>
                  <MonacoEditor
                    height='800'
                    language='javascript'
                    theme='vs-dark'
                    value={code}
                    options={options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                  />
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={6} style={{ paddingLeft: '10px' }}>
          <h2 style={{ textAlign: 'center' }}>组件属性区</h2>
          <Row style={{ marginTop: '10px' }}>
            <Col>
              <Collapse defaultActiveKey={['1']}>
                <Panel header='属性' key='1'>
                  {this.state.currentProps.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col span={10}>{item.key}</Col>
                        <Col span={10}><Input type='text' value={item.value} onChange={this.handlePropsChange.bind(this, item.key, index)}/></Col>
                      </Row>
                    )
                  })}
                </Panel>
                <Panel header='事件' key='2'>
                  <p>{2}</p>
                </Panel>
                <Panel header='样式' key='3'>
                  <p>{3}</p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default withDragDropContext(HomePage)
