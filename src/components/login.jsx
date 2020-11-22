import React from 'react';
import loginImg from '../../bo.jpg';
import Example from './Example';
import { Link } from 'react-router-dom';

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const MOCK_SERVICE = 'http://localhost:3004';
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);
export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      selectedHospital: '',
      username: '',
      password: '',
      errors: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      props: { history },
      state: { username, password, selectedHospital }
    } = this;
    fetch(`${MOCK_SERVICE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, selectedHospital })
    })
      .then(response => response.json())
      .then(data => {
        const { username: name, password: pwd, selectedHospital: selectedHos } = data;
        if (name === '' || pwd === '') {
          this.setState({ errors: 'Fields cant be left blank' });
        }
        if (name && pwd && selectedHos) {
          this.setState(
            {
              isAuthenticated: true
            },
            history.push('/secLogin')
          );
        }
      })
      .catch(e => {
        this.setState({ errors: e.error, isAuthenticated: false });
      });
  };

  // fetch(`${MOCK_SERVICE}/login`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  //   body: JSON.stringify({ username, password }),
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (!data.isAuthenticated) {
  //       this.setState({ errors: 'Fields cant be left blank' });
  //     }
  //         history.push('/secLogin')
  //   })
  //   .catch(e => {
  //     this.setState({ errors: e.error});
  //   });

  handleChange = (e, data) => {
    if (data) {
      this.setState({
        selectedHospital: data.value
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
            </div>
            <Example handleChange={this.handleChange} />
            <button type="submit" className="btn" onClick={this.onLoginClick}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
