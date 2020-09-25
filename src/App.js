import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Signin from './components/Signin';

// const app=new Clarifai.App({
//   apikey:'c81701b36c404fba9ae344a5fd5ea8dd'
// });

const initialState={
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      company:data.company,
      designation:data.designation,
      contact:data.contact,
      email: data.email
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
         
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
             Home
            </div>
          :(
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
        
      </div>
  );
}
}
export default App;
