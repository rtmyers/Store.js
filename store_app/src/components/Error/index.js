import React from 'react'
import PropTypes from 'prop-types'

class Error extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    console.warn(error)
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    console.error(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

Error.propTypes = { children: PropTypes.node.isRequired }

export default Error
