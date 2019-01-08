import React from "react";
import {connect} from "react-redux";

import {loadSampleData} from "../actions/index";

class Orders extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadSampleData());
    }

    render() {
        if (this.props.error) {
            return <div>Error!</div>;
        }

        if (this.props.loading) {
            return <p>Loading...</p>;
        }

        return (
            <ul>
                {this.props.orders.map(order => {
                    return <li key={order.id}> {order.value}</li>
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders,
    loading: state.orders.loading,
    error: state.orders.error,
});

export default connect(mapStateToProps)(Orders);
