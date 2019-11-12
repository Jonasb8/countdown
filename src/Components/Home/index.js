import React from 'react'

/*
  components
*/
import Timer from '../Timer/index';
import Title from '../Title/index'
import Reset from '../Buttons/reset'
import Pause from '../Buttons/pause'


class Home extends React.Component {
    render(){
        return (
            <div className="timerApp">
                <Title/>
                <Timer/>
                <div className="buttonArea">
                    <Reset/>
                    <Pause/>
                </div>
            </div>
        )
    }
}

export default Home
