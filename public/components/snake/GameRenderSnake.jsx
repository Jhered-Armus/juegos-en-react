import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export function RenderGrid ({ grid }) {
  return (
    <Container className='grid border border-2 rounded-2 border-dark' style={{ overflow: 'hidden' }}>
      {grid.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Col key={cellIndex}>
              {cell}
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
}
