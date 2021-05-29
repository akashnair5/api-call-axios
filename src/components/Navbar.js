import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu style = {{backgrouncolor: '#d9d9d9',
                      backgroundImage: 'linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%)'}}>
        <Menu.Item
          name='about'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name='quotes'
          active={activeItem === 'Quotes'}
          onClick={this.handleItemClick}
        >
          Quotes
        </Menu.Item>

        <Menu.Item
          name='events'
          active={activeItem === 'Events'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}