import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth.actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: false
    };

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    console.log('LOGGED IN');
    const payload = { isLoggedIn: true };
    this.props.dispatch(login(payload));
  }

  render() {
    return (
      <div className="container w-25 mx-auto mt-4">
        <form action="" className="card">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="" className="control-label">
                Username
              </label>
              <input id="username" type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="control-label">
                Username
              </label>
              <input id="password" type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit" onClick={this.submit}>
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Login);
