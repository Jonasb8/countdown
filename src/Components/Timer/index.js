import React from 'react'
import moment from 'moment'

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

        return (
            <div>
                <div className="countdown">
                    {seconds}
                    <span> secondes</span>
                </div>

            </div>
        );
    }
}

export default Timer
