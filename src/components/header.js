import React from 'react';
import { Link } from "react-router-dom";
import GoogleOAuth from "./GoogleOAuth";

class Header extends React.Component {
    render() {
        return (
            <div className="ui inverted menu">
                <Link to="/" className="item">
                    PlayMe&trade;
                </Link>
                <div className="right menu">
                    <Link to="/" className="item">
                        All Streams
                    </Link>
                    <div className="item">
                        <GoogleOAuth />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;