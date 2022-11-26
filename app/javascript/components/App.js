import React from 'react';
// import  configureStore from  '../redux/configureStore' ;
// import {getMessages} from "../redux/messages/messagesSlice";
import {Message} from "./Message";


function App() {
    // configureStore.dispatch(getMessages());
    return (<main>
        <h1>Rails React Playground</h1>
        <div className="container">
            <Message/>
        </div>
    </main>);
}

export default App;