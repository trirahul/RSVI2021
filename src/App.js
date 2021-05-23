import './App.css';
import React, { Component } from 'react'
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import Resume from './components/Pages/Resume';
import Home from './components/Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      page: 'home',
    };
  }
  clickHome(){
    this.setState({page:'home'});
  }
  clickResume(){
    this.setState({page:'resume'});
  }
  clickProjects(){
    this.setState({page:'projects'});
  }
  clickContact(){
    this.setState({page:'contact'});
  }
  render() {
    if(this.state.page==='projects'){
      return (
        <div className='App'>
          <Header 
          clickHome={this.clickHome.bind(this)}
          clickResume={this.clickResume.bind(this)}
          clickProjects={this.clickProjects.bind(this)}
          clickContact={this.clickContact.bind(this)}
          />
          <Projects />
          <Footer />
        </div>
      );
    }
    else if(this.state.page==='resume'){
      return (
        <div className='App'>
          <Header 
          clickHome={this.clickHome.bind(this)}
          clickResume={this.clickResume.bind(this)}
          clickProjects={this.clickProjects.bind(this)}
          clickContact={this.clickContact.bind(this)}
          />
          <Resume />
          <Footer />
        </div>
      );
    }
    else if(this.state.page==='contact'){
      return (
        <div className='App'>
          <Header 
          clickHome={this.clickHome.bind(this)}
          clickResume={this.clickResume.bind(this)}
          clickProjects={this.clickProjects.bind(this)}
          clickContact={this.clickContact.bind(this)}
          />
          <Contact />
          <Footer />
        </div>
      );
    }
    else{
      return (
        <div className='App'>
          <Header 
          clickHome={this.clickHome.bind(this)}
          clickResume={this.clickResume.bind(this)}
          clickProjects={this.clickProjects.bind(this)}
          clickContact={this.clickContact.bind(this)}
          />
          <Home 
          clickHome={this.clickHome.bind(this)}
          clickResume={this.clickResume.bind(this)}
          clickProjects={this.clickProjects.bind(this)}
          clickContact={this.clickContact.bind(this)}
          />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
