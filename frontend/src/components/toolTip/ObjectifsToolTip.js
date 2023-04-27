import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
background-color:#FFFFFF;
width:39px;
height:25px;
display:flex;
flex-direction:column;
align-items:center;
`

const Text1 = styled.p `
  color:black;
  font-weight: 500;
  font-size: 8px;
  line-height: 13px;
  margin-top:7px;
`

function ObjectifsToolTip({active, payload}) {
    if (active){
      return (
        <Container>
          <Text1>{payload[0].value} min</Text1>
        </Container>
      );
    }
}
ObjectifsToolTip.propTypes = {
active: PropTypes.bool,
payload: PropTypes.array,
};

export default ObjectifsToolTip