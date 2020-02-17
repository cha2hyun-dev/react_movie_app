import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading..." : "We are Ready"}</div>;
    }

    // state = {
    //     count: 0,
    //     clickedCount: 0
    // };
    // clicked = () => {
    //     this.setState(current => ({ clickedCount: current.clickedCount + 1 }));
    // };
    // add = () => {
    //     this.setState(current => ({ count: current.count + 1 }));
    //     this.clicked();
    // };
    // minus = () => {
    //     this.setState(current => ({ count: current.count - 1 }));
    //     this.clicked();
    // };
    // refresh = () => {
    //     console.log("refresh 누르기전 clickedCount : " + this.state.clickedCount);
    //     this.setState(current => ({ count: 0, clickedCount: 0 }));
    //     console.log("refresh 누른후 clickedCount : " + this.state.clickedCount);
    // };
    // getRandomNum = setNum => {
    //     console.log(setNum);
    // };
    // componentDidMount() {}
    // componentDidUpdate() {}
    // render() {
    //     return (
    //         <div>
    //             <h1>Number: {this.state.count}</h1>
    //             <h1>Total Clicked {this.state.clickedCount}</h1>
    //             <button onClick={this.add}>Add</button>
    //             <button onClick={this.minus}>Minus</button>
    //             <button onClick={this.refresh}>Refresh</button>
    //             <button onClick={this.getRandomNum(110)}>Random</button>
    //         </div>
    //     );
    // }
}
export default App;
