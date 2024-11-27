import React from "react";
class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        // console.log( this.props.name + "Child constructor");
    }

    componentDidMount(){
        // console.log(this.props.name + "child didMount");
    }
    render() {
        const {name, location} = this.props;
        // const { count } = this.state;

        // console.log(this.props.name + "Child render ");
        return (
            <div className="user-details">
            <h2>Name: {name}</h2>
            {/* <h3>CountClass: { count}
                <button onClick={ () => {
                    this.setState({
                        count: count+1
                    })
                }}>IncrementCount</button>
            </h3> */}
            <h2>Location: {location}</h2>
            <h2>Contact: 07503xxxxx</h2>
            <h2>Email: moinuddinxxx@gmail.com</h2>
        </div>
        )
    }
}
export default UserClass;