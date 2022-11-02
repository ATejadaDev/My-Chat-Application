import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="f4fab40c-39e9-48d8-abe0-81b2d6812903"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;