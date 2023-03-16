import React from 'react'
import { Row } from 'react-bootstrap'

export default function Header({ checkResult, result }) {
    return (
        <Row>
            <div className={`fs-1 text-center m-5 fw-bold font-monospace ${checkResult === result.thang ? 'text-success' : checkResult === result.thua ? 'text-danger' : 'text-black'} `}>
                Random Number (1-100)
            </div>
        </Row>
    )
}
