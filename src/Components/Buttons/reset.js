import React from 'react'
import { connect } from 'react-redux'
import {reset} from '../../actions/Reset/reset'

class Reset extends React.Component {
    render(){
        console.log('props',this.props);
        let {
          handleReset
        } = this.props
        return(
            <button
              className="button"
              onClick = {handleReset}
            >Reset</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleReset : () => dispatch(reset())
    }
}

export default connect(null,mapDispatchToProps)(Reset)
