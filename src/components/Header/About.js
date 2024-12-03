import UserContext from "../../../utils/UserContext";
import UserClass from "./UserClass";
import React  from "react";
class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Bunny",
                loginid: "xxxx",
                url: "http://www.linkedIn.com/",
                avatar_url: ""
            }
        }
        console.log("Constructor called")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/moinuddin3177");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log("ComonentDidMount called");
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate called");
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount called")
    }
    render (){
        const {login, url, avatar_url} = this.state.userInfo;
        console.log("Render called")
        return(
            <div className="about">
                <h2>About Me !</h2>
            {/* <h2><User name={"Moin passed as props func"}/> </h2> */}
            {/* <h2><UserClass name={"Moin "} location={"london"}/></h2> */}
            <div>
                loggedIn User
                <UserContext.Consumer>
                    {(data) => <h2 className="font-bold">{data.loggedInUser}</h2>}
                </UserContext.Consumer>
            </div>
            <h4>Name: {login}</h4>
            <h4>Avatar: <img src= {avatar_url}/></h4>
            <h4>Url: {url}</h4>
            {/* <h2><UserClass name={"Asra "} location={"loc"}/></h2>
            <h2><UserClass name={"AsMan "} location={"loc"}/></h2> */}


            </div>
        )
    }
}
// ! React class component life cycle methods
// ! -----  Parent Constructor
// ! ---------- Parent render
// ! ---------- Child1 constructor
// ! ---------- Child1 render
// ! ---------- Parent2 constructor
// ! ---------- Child2 render
// ! ---------- Child1 didMount
// ! ---------- Child2 didMount
// ! ---------- Parent didMount

// ? ---------- Render Phase
// ? ---Constructor 
// ? ----Render
// ? ----------- Commit Phase
// ? ---Update DOM 
// ? ----DidMount
// ? -----------Commit Phase will be batched together---


// const About = () => {
//     return (
//         <div className="about">
//              {/* <h2><User name={"Moin passed as props func"}/> </h2> */}
//              <h2><UserClass name={"Moin passed as props class"} location={"loc"}/></h2>
//         </div>
//     )
// }
export default About;