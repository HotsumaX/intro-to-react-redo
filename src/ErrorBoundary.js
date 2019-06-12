/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate() {
    const { hasError } = this.state;

    if (hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (hasError) {
      return (
        <h1>
          there was an error with this listing.
          <Link to="/"> Click here </Link>
          to go back to the home page or wait five seconds
        </h1>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
