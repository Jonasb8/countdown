import React from 'react'
import { connect } from 'react-redux'
import {color} from '../../actions/colors/show'


class Timer extends React.Component {
    state = {
        seconds: 40
    };


    resetCountdown = () => {
        let {
            reset
        } = this.props
        console.log('reset', reset);
        if (reset.success) {
            this.setState({seconds:40})
        }
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            if (this.state.seconds > 0) {
                this.setState({ seconds : this.state.seconds - 1 });
                this.resetCountdown() // to FIX
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        console.log('props->',this.props);
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

const mapStateToProps = state => {
    return {
        reset : state.reset.reset
    }
}

export default connect(mapStateToProps,null)(Timer)
