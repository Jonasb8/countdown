import React from 'react'

/*
  components
*/
import Timer from '../Timer/index';
import Title from '../Title/index'

class Home extends React.Component {
    render(){
        return (
            <div className="timerApp">
                <Title/>
                <Timer/>
            </div>
        )
    }
}

export default Home
