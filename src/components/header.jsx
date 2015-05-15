/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    light: false
  },

  render: function() {
    var headerClass = 'flex flex-center flex-wrap mxn2';
    var buttonClass = 'button rounded button-transparent ';
    buttonClass += this.props.light ? 'black' : 'bg-darken-2';
    headerClass += this.props.light ? ' black' : ' white';
    return (
      <header className={headerClass}>
        <div className="flex-auto px2">
          <h1 className="m0">
            {this.props.name}
            <span className="h4"> v{this.props.version}</span>
          </h1>
          <p className="m0">{this.props.description}</p>
        </div>
        <a href="https://twitter.com/intent/tweet?text=Mathematically derived gradient explorer&amp;url=http://jxnblk.com/shade&amp;via=jxnblk"
          className={buttonClass}>
            Tweet
        </a>
      </header>
    )
  }

});

