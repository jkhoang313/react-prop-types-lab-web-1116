const React = require('react')

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: function weightCheck(props, propName, componentName) {
    if (props[propName] === undefined) {
      return new Error(
        "Error"
      )
    } else if (isNaN(props[propName])) {
      return new Error(
        "Errors"
      )
    } else if (props[propName] < 80 || props[propName] > 300) {
      return new Error(
        "Invalid prop " + propName
      )
    }
  }
}

module.exports = Product
