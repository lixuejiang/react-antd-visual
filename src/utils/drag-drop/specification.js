export const dragTarget = {
  canDrag(props, monitor) {
    return !props.resizing
  },
  beginDrag(props) {
    console.log('beginDrag')
    return { id: props.id }
  },
  endDrag(props, monitor) {
    console.log('endDrag')
    if (!monitor.didDrop()) return
    const targetID = monitor.getDropResult().id
    const type = props.type
    props.moveComponent({ type }, targetID)
  }
}

export const dropTarget = {
  drop(props, monitor) {
    if (monitor.didDrop()) return
    return { id: props.id }
  }
}
