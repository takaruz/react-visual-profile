/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  AppBar,
  Dialog,
  Divider,
  Drawer,
  FlatButton,
  MenuItem,
  Paper,
  RaisedButton
} from 'material-ui'

import {styles, muiTheme} from './theme/style'
import style from './theme/style.scss'

import {AppBarComp, Avatar, SkillChip} from './components'

import FirebaseAPI from './manager/FirebaseAPI'

FirebaseAPI.database().ref('profile/skills').once('value').then(function(snapshot) {
  console.log(snapshot.val());
})

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      dialog: false,
      drawer: false
    };
  }
  
  handleResize() {
    if (window.innerWidth < 750) {
      this.setState({
        drawer: false
      })
    } else {
      this.setState({
        drawer: true
      })
    }
  }
  
  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize);
  }

  handleRequestClose(name) {
    let state = {}
    if (name == 'dialog') {
      state[name] = false;
    } else {
      if (window.innerWidth < 750) {
        state[name] = false;
      }
    }
    this.setState(state)
  }

  handleTouchTap(name) {
    let state = {}
    if (name == 'dialog') {
      state[name] = true;
    } else {
      state[name] = true;
    }
    this.setState(state)
  }
  

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose.bind(this, 'dialog')}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Drawer 
            open={this.state.drawer}
          >
            <AppBar 
              title="Menu"
              showMenuIconButton={false} />
            <MenuItem 
              onTouchTap={this.handleRequestClose.bind(this, 'drawer')}>
              Menu Item
            </MenuItem>
            <MenuItem 
              onTouchTap={this.handleRequestClose.bind(this, 'drawer')}>
              Menu Item 2
            </MenuItem>
          </Drawer>
          <AppBar
            style={{position:'fixed'}}
            title="My Profile"
            onLeftIconButtonTouchTap={this.handleTouchTap.bind(this, 'drawer')}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div
            className="mainContainer"
            style={styles.container}
          >
            <div style={{paddingTop:64}}>
            <Avatar imageSrc="images/avatar.jpg" />
            
            <h1>Pongpat Poapetch</h1>
          
            <Paper zDepth={2} 
              className={style['margin20']} >
              <div className={style['paperStyle']} >
                <h1 className={style['header']}>Work History</h1>

                <h3>Technical Lead, System Engineer (Contract Job)</h3>
                <h4>Facgure Co.,Ltd. (Feb 2016 - Jun 2016)</h4>
                <ul>
                  <li>Redesignedfixed architecture to configurable application.</li>
                  <li>Applied docker engine to development and production environment.</li>
                  <li>Designed architecture and bundle to deploy multiple production sites.</li>
                  <li>Designed custom docker image for iThesis application.</li>
                  <li>Developed iThesis setup server.</li>
                </ul>
                
                <h3>Senior Java Developer</h3>
                <h4>Solution link (Feb 2015 - Jan 2016)</h4>
                <ul>
                  <li>Developed Calculate Premium application.</li>
                  <li>Developed Full stack for insurance application.</li>
                  <li>Developed job scheduler controller.</li>
                  <li>Migrated backend database from Informix to DB2.</li>
                </ul>
                
                <h3>Programmer</h3>
                <h4>DST Worldwide Services (Thailand) Limited (Dec 2014 - Jan 2015)</h4>
                <ul>
                  <li>HP Exstream dialogue programming.</li>
                  <li>FM Setup Application and script programming.</li>
                  <li>OTD Project application (Weblogic + Struts).</li>
                  <li>Developed useful common tools for team.</li>
                </ul>
              </div>
              <Divider />
              <div className={style['paperStyle']} >
                <h1 className={style['header']}>Skills</h1>
                <SkillChip />
              </div>
              <Divider />
                <div className={style['paperStyle']} >
                  <h1 className={style['header']}>Education</h1>

                  <h3>MEng in Computer Engineering</h3>
                  <h4>Chulalongkorn University (June 2011 - May 2013)</h4>
                  <ul>
                    <li>Activity in campus: Teacher assistant in Operating system courses, administrator SPACE lab. Setup CUDA lab.</li>
                    <li>Thesis: Parallel Computing with Real-Time Constraints on Graphics Processing Unit: A Case Study of Tsunami Simulation.</li>
                    <li>Publication: Parallel Computing with Real-Time Constraints on Graphics Processing Unit: A Case Study of Tsunami Simulation, ANSCSE 17, (2013)</li>
                  </ul>
                  
                  <h3>BEng in Computer Engineering</h3>
                  <h4>King Mongkut's University of Technology North Bangkok (June 2007 - May 2011)</h4>
                  <ul>
                    <li>GPA: 3.01</li>
                    <li>Activity in campus: Teacher assistant in programming and database courses, administrator in computer lab.</li>
                    <li>Senior project: Finance resource and Human resource management modules for Servisoft ERP System (via Code Igniter frameworks).</li>
                  </ul>
                </div>
            </Paper>
            <RaisedButton
              label="See more"
              style={styles.marginBottom20}
              secondary={true}
              onTouchTap={this.handleTouchTap.bind(this, 'dialog')}
            />
            </div>
            <Dialog
              open={this.state.dialog}
              title="Coming soon..."
              actions={standardActions}
              onRequestClose={this.handleRequestClose.bind(this, 'dialog')}
            >
              ...
            </Dialog>
            <div style={styles.marginBottom20}>Visual Profile base on ReactJS.</div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
