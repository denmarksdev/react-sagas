import React from 'react'
import { Card, Button, Alert } from 'react-bootstrap'

import { connect } from 'react-redux'
import { loadDataUARequest } from '../actions/actionsUA'

class UserAgent extends React.Component {

    render() {

        const { isFetching } = this.props

        return (
            <Card className='info-container' >
                <Card.Title>
                    <p>User Agent</p>
                </Card.Title>
                <Card.Body>
                    <p>{JSON.stringify(this.props.data)}</p>
                </Card.Body>
                <Card.Footer>
                    {
                        !isFetching &&
                        <Button variant='primary' onClick={() => this.props.loadData()}  >
                            Load
                        </Button>
                    }
                    {
                        isFetching &&
                        <Alert variant='primary' > Loading ... </Alert>
                    }
                </Card.Footer>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(loadDataUARequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)