import React, {Component, PropTypes} from 'react';
import {Chip, CircularProgress} from 'material-ui';
import {lightBlue100} from 'material-ui/styles/colors';
import FirebaseAPI from '../../manager/FirebaseAPI'

export default class SkillChipComp extends Component {
  
  constructor(props) {
    super(props);
    
    // TODO: bine this to function here
    
  }
  
  // static propTypes: {
  //   skills: PropTypes.object.isRequired,
  // }
  
  state = {
   skills: [],
   display: 'block'
  }
  
  styles = {
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }
  
  componentDidMount() {
    let self = this
    FirebaseAPI.database().ref('profile/skills').once('value').then(function(snapshot) {
      self.setState({skills: snapshot.val(), display: 'none'})
    })
  }

  renderChip(data, index) {
    return (
      <Chip
        key={index}
        backgroundColor={lightBlue100}
        style={{margin: 4}}
      >
        {data}
      </Chip>
    );
  }

  render() {
    const { skills } = this.state
    
    return (
      <div style={this.styles.wrapper}>
        <CircularProgress style={{display: this.state.display}} />
        {skills.map(this.renderChip, this)}
      </div>
    );
  }
}
