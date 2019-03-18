import React, { Component } from 'react'
import VirtualizedCheckbox from 'react-virtualized-checkbox'

class MyCheckbox extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const items = [
      { label: "One", value: 1, checked: true},
      { label: "Two", value: 2, checked: true},
      { label: "Three", value: 3, checked: true},
      { label: "One", value: 1, checked: true},
      { label: "Two", value: 2, checked: true},
      { label: "Three", value: 3, checked: true},
      { label: "One", value: 1, checked: true},
      { label: "Two", value: 2, checked: true},
      { label: "Three", value: 3, checked: true},
      { label: "One", value: 1, checked: true},
      { label: "Two", value: 2, checked: true},
      { label: "Three", value: 3, checked: true}
      // And so on...
    ]

    return (
      <VirtualizedCheckbox
      labelKey="name"
      hasFilterBox={false}
      rowHeight= '50px'
      items={items}
        onOk={(checkedItems) => this.setState({ checkedItems })}
        onCancel={ () => this.setState({ checkedItems: [] })}
      />
    )
  }
}

export default MyCheckbox;