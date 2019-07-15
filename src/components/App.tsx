import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/fox.png");
import "./../assets/scss/App.scss";

class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <div className="app">
	      <h1 class="logo">
                <img src={reactLogo} height="60"/>
		Skillsera
	      </h1>
              <h2 class="tagline">
	        A free community-powered encyclopedia which teaches educational<br/>concepts by connecting bite-sized youtube video explanations.
	      </h2>
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(App);
