import React from 'react';

class GoogleOAuth extends React.Component{
    componentDidMount(){
        window.gapi.load("client:auth2", function(){
            window.gapi.client.init({
                client_id : '766274233139-k3rq5bebg90n41l3u84tt7brslm4ns2m.apps.googleusercontent.com',
                scope : "email"
            });
        })
    }

    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleOAuth;