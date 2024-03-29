import React from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import './Info.css'

import { connect } from 'react-redux'
import { loadDataRequest } from '../actions/actionsIP'

class Info extends React.Component {

    render() {
        const { isFetching , data, loadDataRequest } = this.props

        console.log(isFetching)

        return (
            <Card className='info-container' >
                <Card.Title>
                    <p>Meu IP</p>
                </Card.Title>
                <Card.Body>
                    <p>{JSON.stringify(data)}</p>
                </Card.Body>
                <Card.Footer>
                    {
                        !isFetching &&
                        <Button variant='primary' onClick={() => loadDataRequest()}  >
                            Load
                        </Button>
                    }
                    {
                        isFetching &&
                        <Alert variant='primary' >Loading ...</Alert>
                    }
                </Card.Footer>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDataRequest: () => dispatch(loadDataRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)