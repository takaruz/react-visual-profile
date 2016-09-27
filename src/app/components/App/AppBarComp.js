import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import styles from './AppBarComp.scss'

export default class AppBarComp extends Component {
  static propTypes: {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title } = this.props
    
    return (
      <AppBar
        style={{position:'fixed'}}
        className={styles['header']}
        title={this.props.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}