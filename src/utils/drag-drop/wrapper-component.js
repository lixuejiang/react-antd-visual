import React, { Component } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import { ItemTypes } from './item-types'
import { dragTarget, dropTarget } from './specification'
import { dragCollect, dropCollect } from './collectors'

// Connect and wrap
function DndWrappedComponent(Component) {
  const dndConnectedComponent = (props) => {
    const { connectDragSource, connectDropTarget } = props
    return connectDragSource(connectDropTarget(Component))
  }

  const dragWrappedComponent =
    DragSource(ItemTypes.COMPONENT, dragTarget, dragCollect)(dndConnectedComponent)
  const dndWrappedComponent =
    DropTarget(ItemTypes.COMPONENT, dropTarget, dropCollect)(dragWrappedComponent)
  return dndWrappedComponent
}

class DragSourceComponent extends Component {
  render() {
    const { connectDragSource } = this.props
    return connectDragSource(
      <div>
        {this.props.children}
      </div>
    )
  }
}

class DropTargetComponent extends Component {
  render() {
    const { connectDropTarget } = this.props
    return connectDropTarget(
      <div style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

const DragSourceWrapper = DragSource(ItemTypes.COMPONENT, dragTarget, dragCollect)(DragSourceComponent)
const DropTargetWrapper = DropTarget(ItemTypes.COMPONENT, dropTarget, dropCollect)(DropTargetComponent)

export { DndWrappedComponent, DragSourceWrapper, DropTargetWrapper }
