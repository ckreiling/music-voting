var React = require('react');
var ReactDOM = require('react-dom');

var UserList = React.createClass({
  loadUsersFromServer: function() {
    $.ajax({
      url: this.props.url,
      datatype: 'json',
      cache: false,
      success: function(data){
        console.log('Upon success, the data being received is: ' + data);
        this.setState({data: data});
      }.bind(this)
    })
  },

  getInitialState: function() {
    return {data: null};
  },

  componentDidMount: function() {
    this.loadUsersFromServer();
    setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },

  render: function () {
    if (this.state.data) {
      console.log('Users retrieved');
      console.log(this.state.data);
      var userNodes = this.state.data.results.map(function(user) {
        return (<li> {user.username} </li>);
      });
    }
    return (
      <div>
        <h1>Hey, React! Here's some users:</h1>
        <ul>
          {userNodes}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<UserList url="/system/users.json" pollInterval={1000} />, document.getElementById('container'));