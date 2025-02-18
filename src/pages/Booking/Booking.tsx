import React, { useState, useRef, useEffect } from 'react'
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
import { useScrollToTop } from '../../helpers/useScrollToTop'

export default function Booking() {
  useScrollToTop()

  const [musicalGenreSelected, setMusicalGenreSelected] =
    useState<string>('All')
  const [open, setOpen] = useState<boolean>(false)
  const genreContainerRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      genreContainerRef.current &&
      !genreContainerRef.current.contains(event.target as Node)
    ) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
        headerIllustration={{ jpg: "service_booking.jpg", webp: "service_booking.webp" }}
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
          <h2 aria-label={`Sélectionner une genre musical : ${musicalGenreSelected}`}>Genre musical : {musicalGenreSelected}</h2>
        </GenreTitle>

        <GenreContainer ref={genreContainerRef} open={open}>
          <GenreButton
            onClick={selectAll}
            isSelected={musicalGenreSelected === 'All'}
          >
            All
          </GenreButton>
          {musicalGenresData.map((musicalGenre) => (
            <GenreButton
              key={musicalGenre.name}
              value={musicalGenre.name}
              onClick={inputChoice}
              isSelected={musicalGenre.name === musicalGenreSelected} // Passer la condition
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
    </React.Fragment >
  )
}
