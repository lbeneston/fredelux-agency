import React from 'react'
import { SectionComponent } from './Styles'

interface SectionProps {
  id?: string
  headerTitle: string
  headerIllustration: { jpg: string, webp: string }
  descriptionTitle: string
  descriptionParagraphe: string
  option?: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
  id,
  headerTitle,
  headerIllustration,
  descriptionTitle,
  descriptionParagraphe,
  option = null,
}) => {
  return (
    <SectionComponent id={id}>
      <div className="section_header">
        <div className="section_header_background" />
        <h1 className="section_header_title">{headerTitle}</h1>
        <div className="section_header_illustration">
          <source srcSet={`${process.env.PUBLIC_URL}/images/${headerIllustration.webp}`} type="image/webp" />
          <img src={`${process.env.PUBLIC_URL}/images/${headerIllustration.jpg}`} alt="" />
        </div>
      </div>
      <div className="section_description">
        <div className="section_description_container">
          <h2 className="section_description_container_title">
            {descriptionTitle}
          </h2>
          <p className="section_description_container_paragraphe">
            {descriptionParagraphe}
          </p>
          {option}
        </div>
      </div>
    </SectionComponent>
  )
}
