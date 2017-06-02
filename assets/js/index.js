var React = require('react');
var ReactDOM = require('react-dom');

class UserList extends React.Component {

  /**
   * Constructor for the React component which also initializes state
   * @param props
   */
  constructor(props) {
    super(props);
  }

  state = {data: null};

  /**
   * Load the users form the server by making an
   * Ajax request using jQuery
   */
  loadUsersFromServer = () => {

    $.ajax(this.props.url, {
      datatype: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this)
    })
  };

  /**
   * When a component mounts, load the Users from the server,
   * and set an interval to check for updates to the User queryset.
   */
  componentDidMount = () => {
    this.loadUsersFromServer();
    setInterval(this.loadUsersFromServer, this.props.pollInterval);
  };

  render() {
    if (this.state.data) {
      console.log('Users retrieved');
      var userNodes = this.state.data.results.map(function (user) {
        return (<li key={user.username.toString()}>Username: <span>{user.username}</span>, Email: <span>{user.email}</span></li>);
      });
      return (
        <div>
          <h1>Hey, React! Here's some users:</h1>
          <ul>
            {userNodes}
          </ul>
        </div>
      );
    }
    else {
      return <h1>Hey, React! Here's some users:</h1>
    }

  }
}

ReactDOM.render(<UserList url={"/system/users.json"} pollInterval={1000}/>, document.getElementById('container'));