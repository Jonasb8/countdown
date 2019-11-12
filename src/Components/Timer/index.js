import React from 'react'

import {color} from '../../actions/colors/show'


class Timer extends React.Component {
    state = {
        seconds: 40
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.seconds > 0) {
                this.setState({ seconds : this.state.seconds - 1 });
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { seconds } = this.state;
        console.log(seconds);

        return (
            <div>
                <div className="countdown" style={{backgroundColor:color(seconds)}}>
                    {seconds}
                    <span> secondes</span>
                </div>

            </div>
        );
    }
}



export default Timer
