import React from 'react'
import { Card } from 'react-bootstrap'
import './Info.css'

import { connect } from 'react-redux'
import { loadDataRequest } from '../actions/actionsData'

 class Info extends React.Component {

    render() {
        return (
            <Card className='info-container' >
                <Card.Title>
                    <p>Meu IP</p>
                 </Card.Title>
                <Card.Body>
                    <p>...</p>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.ip.isFething,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDataRequest: ()=>  dispatch(loadDataRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)