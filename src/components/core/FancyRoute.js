import React from 'react'
import { Route } from 'react-router-dom'
import TopBarProgress from "react-topbar-progress-indicator";
class FancyRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {load: null};
  }
  componentWillMount () {
    this.setState({
      load: true
    });
  }

  componentDidMount () {
    this.setState({
      load: false
    });
  }

  render () {
    TopBarProgress.config({
      barColors: {
        "0": "#f86d70",
        "1.0": "#f86d70"
      },
      shadowBlur: 5
    });
    return (
      <>
        {this.state.load && <TopBarProgress />}
        <Route {...this.props} />
      </>
    )
  }
}

export default FancyRoute;