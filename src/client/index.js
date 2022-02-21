import React from "react";
import ReactDOM, { render } from "react-dom";
import axios from "axios";
import { port, host } from '../server/config';

class App extends React.Component {
    state = {
        users: [],
    }
    async componentDidMount() {
        const data = await axios.post(`http://${host}:${port}/task`, {
            userName: 'ashish'
        });
        this.setState({
            users: data.data,
        });
    };

    render() {
        const { users } = this.state;
        return (
            <>
                <h2>This is react app</h2>

                {users.map((user) => (
                    <div key={user.id}>
                        <span>{user.name}</span>
                    </div>
                ))}
            </>
        );
    };
};

ReactDOM.render(<App />, document.getElementById('root'));