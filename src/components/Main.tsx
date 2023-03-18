import React from "react";
import {Header} from "antd/es/layout/layout";
import Body from "./Body";

function Main() {
    return (<div>
            <Header style={headerStyle}>Star Wars Movies</Header>
            <Body />
        </div>
    )
}

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    fontSize: "1.5rem"
};

export default Main;
