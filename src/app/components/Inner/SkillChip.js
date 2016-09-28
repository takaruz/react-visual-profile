import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import {lightBlue100} from 'material-ui/styles/colors';

export default class SkillChip extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {chipData: [
      {key: 0, label: 'ReactJS'},
      {key: 1, label: 'JQuery'},
      {key: 2, label: 'PHP'},
      {key: 3, label: 'NodeJS'},
      {key: 4, label: 'RESTful'},
      {key: 5, label: 'Shell'},
      {key: 6, label: 'Linux'},
      {key: 7, label: 'Docker'},
      {key: 8, label: 'J2EE'},
      {key: 9, label: 'Android'},
      {key: 10, label: 'Firebase'},
      {key: 11, label: 'Retrofit'},
      {key: 12, label: 'Mysql'},
      {key: 13, label: 'Postgres'},
      {key: 14, label: 'Mariadb'},
      {key: 15, label: 'MSsql'},
      {key: 16, label: 'DB2'},
      {key: 17, label: 'HTML'},
      {key: 18, label: 'CSS'},
      {key: 19, label: 'Perl'},
      {key: 20, label: 'Python'},
      {key: 21, label: 'UX/UI'}
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        backgroundColor={lightBlue100}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}