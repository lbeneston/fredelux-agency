import React from 'react'
import { PartenairesCarrouselComponent } from './Styles'

interface PartenairesProps {
  href: string
  src: { jpg: string, webp: string }
  nom: string
}

export const Partenaires: React.FC<PartenairesProps> = ({ href, src, nom }) => {
  return (
    <PartenairesCarrouselComponent href={href} target="_blank" rel="noreferrer">
      <source srcSet={`${process.env.PUBLIC_URL}/images/${src.webp}`} type="image/webp" />
      <img className="item_illustration" src={`${process.env.PUBLIC_URL}/images/${src.jpg}`} alt={nom} />
      <div className="item_description">
        <h4>{nom}</h4>
        <p>Découvrir</p>
      </div>
    </PartenairesCarrouselComponent>
  )
}
