import React from 'react'
import { useScrollToTop } from '../../helpers/useScrollToTop'
import { Link } from 'react-router-dom'


export const Home = () => {
  useScrollToTop()

  return (
    <React.Fragment>
      <Link to="/agence">Aller à la page 2</Link>
    </React.Fragment >
  )
}
