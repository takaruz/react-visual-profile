import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import styles from '../../theme/style.scss'

export default class AvatarIcon extends Component {
  static propTypes: {
    imageSrc: PropTypes.string.isRequired,
  }

  render() {
    const { imageSrc } = this.props
    
    return (
      <Avatar
        className={styles['avatarStyle']}
        src={this.props.imageSrc}
        size={150}
      />
    )
  }
}
