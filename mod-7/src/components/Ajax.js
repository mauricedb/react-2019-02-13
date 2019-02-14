import React, { Component } from 'react';

class Ajax extends Component {
  state = {
    data: [],
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const rsp = await fetch(this.props.url);
      if (!rsp.ok) {
        throw rsp;
      }
      if (rsp.headers.get('content-type').startsWith('application/json')) {
        const data = await rsp.json();
        this.setState({ data });
      } else {
        const data = await rsp.text();
        this.setState({ data });
      }
    } catch (error) {
      this.setState({ error });
    }
    this.setState({ loading: false });
  }

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return this.props.children(data);
  }
}

export default Ajax;
