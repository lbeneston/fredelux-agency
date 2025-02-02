import React, { useState } from 'react'
import djsData from '../../data/djs.json'
import musicalGenresData from '../../data/musicalGenres.json'
import { Section } from '../../components/section/Section'
import {
  MusicalGenresWrapper,
  GenreTitle,
  GenreContainer,
  GenreButton,
  DjsList,
  DjsCard,
  ProfilePicture,
  Informations,
  DJName,
  MusicalGenresContainer,
  MusicalGenreItem,
} from './Styles'
import { ContactLink } from '../../components/contactLink/ContactLink'

export default function Booking() {
  const [musicalGenreSelected, setMusicalGenreSelected] =
    useState<string>('All')
  const [open, setOpen] = useState<boolean>(false)

  const inputChoice = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value
    setMusicalGenreSelected(value)
    setOpen(false)
  }

  const selectAll = () => {
    setMusicalGenreSelected('All')
    setOpen(false)
  }

  const djFilterArray = djsData.filter((dj) =>
    musicalGenreSelected === 'All'
      ? true
      : dj.musical_genres.includes(musicalGenreSelected)
  )

  return (
    <React.Fragment>
      <Section
        headerTitle="Booking DJ"
        headerIllustration={`${process.env.PUBLIC_URL}/images/service_booking.jpg`}
        descriptionTitle="Faire de votre événement un moment inoubliable"
        descriptionParagraphe={`Nous disposons d’un Roster DJ très varié. Tous nos artistes ont une expérience solide et confirmée en France et à l’étranger, mixant tout type de répertoire musical de la Deep House au Hip Hop en passant par le Disco, le R’n’B, le Funk, ou le RAP. 

                Tous nos DJs sont à découvrir et à réserver pour vos : 
                - lancements de produits
                - soirées privées
                - inaugurations
                - défilés de mode
                - dîners ou autres événements
                
                Pour toute information, faites une demande de rendez-vous depuis notre formulaire de contact ou directement depuis les fiches de nos DJs.
                
                Nous contacter :`}
        option={<ContactLink subject="Booking" />}
      />

      <MusicalGenresWrapper>
        <GenreTitle onClick={() => setOpen(!open)}>
          <h3>Genre musical : {musicalGenreSelected}</h3>
        </GenreTitle>

        <GenreContainer open={open}>
          <GenreButton onClick={selectAll}>All</GenreButton>
          {musicalGenresData.map((musicalGenre) => (
            <GenreButton
              key={musicalGenre.name}
              value={musicalGenre.name}
              onClick={inputChoice}
            >
              {musicalGenre.name}
            </GenreButton>
          ))}
        </GenreContainer>
      </MusicalGenresWrapper>

      <DjsList>
        {djFilterArray.map((dj) => (
          <DjsCard to={`/booking/${dj.url_name}/#`} key={dj.url_name}>
            <ProfilePicture
              src={`${process.env.PUBLIC_URL}/images/${dj.profile_picture}`}
              alt=""
            />
            <Informations>
              <DJName>{dj.name}</DJName>
              <MusicalGenresContainer>
                {dj.musical_genres.map((musicalGenre) => (
                  <MusicalGenreItem key={musicalGenre}>
                    {musicalGenre}
                  </MusicalGenreItem>
                ))}
              </MusicalGenresContainer>
            </Informations>
          </DjsCard>
        ))}
      </DjsList>
    </React.Fragment>
  )
}
