import React from 'react'
import { SectionComponent } from './Styles'

interface SectionProps {
  id?: string
  headerTitle: string
  headerIllustration: string
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
        <h2 className="section_header_title">{headerTitle}</h2>
        <div className="section_header_illustration">
          <img src={headerIllustration} alt="" />
        </div>
      </div>
      <div className="section_description">
        <div className="section_description_container">
          <h3 className="section_description_container_title">
            {descriptionTitle}
          </h3>
          <p className="section_description_container_paragraphe">
            {descriptionParagraphe}
          </p>
          {option}
        </div>
      </div>
    </SectionComponent>
  )
}
