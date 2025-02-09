import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import djsData from '../../data/djs.json'
import { SocialNetwork } from '../../components/socialNetwork/SocialNetwork'
import { Beatport } from '../../svg/Beatport'
import { Facebook } from '../../svg/Facebook'
import { Instagram } from '../../svg/Instagram'
import { Mixcloud } from '../../svg/Mixcloud'
import { Soundcloud } from '../../svg/Soundcloud'
import { Spotify } from '../../svg/Spotify'
import { Youtube } from '../../svg/Youtube'
import {
  DjCardContainer,
  DjCardContainerTitle,
  DjCardWrapper,
  DjCardCloseButton,
  DjCardHeader,
  DjCardHeaderProfilePicture,
  DjCardHeaderInformations,
  DjCardHeaderInformationsName,
  DjCardHeaderInformationsMusicalGenres,
  DjCardHeaderInformationsMusicalGenresItem,
  DjCardHeaderInformationsSocialNetworks,
  DjCardHeaderBookingButton,
  DjCardHeaderBookingButtonButton,
  DjCardDescription,
  DjCardDescriptionTitles,
  DjCardDescriptionTitlesLine,
  DjCardDescriptionTitlesText,
  DjCardDescriptionParagraphe,
} from './Styles'
import { NoMatch } from '../NoMatch/NoMatch'
import { ContactForm } from '../../components/contactForm/ContactForm'
import { useScrollToTop } from '../../helpers/useScrollToTop'

export const DjCard = () => {
  useScrollToTop()

  const { url_name } = useParams()
  const [djDetails, setDjDetails] = useState<any>(null)

  useEffect(() => {
    const dj = djsData.find((dj) => dj.url_name === url_name)
    if (dj) setDjDetails(dj)
  }, [url_name])

  if (!djDetails) return <NoMatch />

  const HideShowSocialNetwork = (
    socialKey: string,
    IconComponent: React.ElementType
  ) => {
    if (djDetails[socialKey]) {
      return (
        <SocialNetwork href={djDetails[socialKey]} logo={<IconComponent />} />
      )
    }
    return null
  }

  return (
    <DjCardContainer>
      <DjCardContainerTitle>
        <h1>Booking DJ</h1>
      </DjCardContainerTitle>
      <DjCardWrapper>
        <DjCardCloseButton>
          <Link to="/booking">
            <span className="close_button">&times;</span>
          </Link>
        </DjCardCloseButton>
        <DjCardHeader>
          <DjCardHeaderProfilePicture
            src={`${process.env.PUBLIC_URL}/images/${djDetails.profile_picture}`}
            alt=""
          />
          <DjCardHeaderInformations>
            <DjCardHeaderInformationsName>
              {djDetails.name}
            </DjCardHeaderInformationsName>
            <DjCardHeaderInformationsMusicalGenres>
              {djDetails.musical_genres.map((musicalGenre: string) => (
                <DjCardHeaderInformationsMusicalGenresItem key={musicalGenre}>
                  {musicalGenre}
                </DjCardHeaderInformationsMusicalGenresItem>
              ))}
            </DjCardHeaderInformationsMusicalGenres>
            <DjCardHeaderInformationsSocialNetworks>
              {HideShowSocialNetwork('soundcloud', Soundcloud)}
              {HideShowSocialNetwork('facebook', Facebook)}
              {HideShowSocialNetwork('instagram', Instagram)}
              {HideShowSocialNetwork('spotify', Spotify)}
              {HideShowSocialNetwork('beatport', Beatport)}
              {HideShowSocialNetwork('mixcloud', Mixcloud)}
              {HideShowSocialNetwork('youtube', Youtube)}
            </DjCardHeaderInformationsSocialNetworks>
          </DjCardHeaderInformations>
          <DjCardHeaderBookingButton>
            <DjCardHeaderBookingButtonButton href="#contact">
              Bookez-moi
            </DjCardHeaderBookingButtonButton>
          </DjCardHeaderBookingButton>
        </DjCardHeader>
        <DjCardDescription>
          <DjCardDescriptionTitles>
            <DjCardDescriptionTitlesLine />
            <DjCardDescriptionTitlesText>
              Biographie
            </DjCardDescriptionTitlesText>
          </DjCardDescriptionTitles>
          <DjCardDescriptionParagraphe>
            {djDetails.biography}
          </DjCardDescriptionParagraphe>
          <DjCardDescriptionTitles id="contact">
            <DjCardDescriptionTitlesLine />
            <DjCardDescriptionTitlesText>
              Contacter {djDetails.name}
            </DjCardDescriptionTitlesText>
          </DjCardDescriptionTitles>
          <ContactForm customSubject={`Booking ${djDetails.name}`} />
        </DjCardDescription>
      </DjCardWrapper>
    </DjCardContainer>
  )
}
