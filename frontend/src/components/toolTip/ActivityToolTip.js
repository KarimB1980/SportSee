import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
background-color:#E60000;
width:39px;
height:63px;
display:flex;
flex-direction:column;
align-items:center;
`

const Text1 = styled.p`
color:white;
font-weight: 500;
font-size: 10px;
line-height: 18px;
margin-top:7px;
`

function ActivityToolTip({ active, payload }) {
  if (active) {
    return (
      <Container>
        <Text1>{payload[0].value}kg</Text1>
        <Text1>{payload[1].value}Kcal</Text1>
      </Container>
    );
  }
}
ActivityToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default ActivityToolTip