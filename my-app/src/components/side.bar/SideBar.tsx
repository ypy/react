import * as React from 'react'

class SideBar extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.name }
    }

    public render() {
        return (
            <div>
                <div className="side-bar-container"> {this.state.name}</div>
                <button onClick={this.activateLasers}>
                    Activate Lasers
          </button>
            </div>
        )
    }

    public activateLasers = () => {
        this.setState({ name: '1232' })
    }
}

export default SideBar