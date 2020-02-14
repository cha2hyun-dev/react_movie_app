import React from "react";
function Potato(props) {
    console.log(props.fav);
    return <h1>i like potato</h1>;
}

function App() {
    return (
        <div className="App">
            <h1>dd</h1>
            <h2>ddd</h2>
            <Potato fav="testzzz" />
        </div>
    );
}

export default App;
