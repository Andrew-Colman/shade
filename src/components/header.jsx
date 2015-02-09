/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <header className="flex flex-center flex-wrap white">
        <div className="flex-auto">
          <h1 className="m0">
            {this.props.name}
            <span className="h4"> v{this.props.version}</span>
          </h1>
          <p className="m0">{this.props.description}</p>
        </div>
        <a href="https://twitter.com/intent/tweet?text=Throw some shade&amp;url=http://jxnblk.com/shade&amp;via=jxnblk"
          className="button button-nav-dark bg-darken-2 rounded">
            Tweet
        </a>
      </header>
    )
  }

});

