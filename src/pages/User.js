import React, { useEffect } from 'react'
//import Datas from '../_mocks/Fetch'
//import { Link } from "react-router-dom"
import Nav from '../components/Nav'
import '../components/Nav.css'
import './User.css'

import test from '../_mocks/test'

//import Datas from '../_mocks/Fetch'

// Affichage des cartes des logements
export default function AffichageDonneesJSON() {
  useEffect(() => {
    console.log(test());
    //console.log(Datas());
  }, [])

  return (
    <div className='utilisateurs'>
      <Nav />
    </div>
  )
}