import React, { useState, useEffect } from 'react'
import { validateForm } from './validatedContactForm'
import {
  InputContainer,
  InputField,
  ErrorMessage,
  TextArea,
  Button,
  FormContainer,
  InputWrapper,
  SelectField,
  LargerInputWrapper,
  HiddenLabel,
} from './Styles'
import { FREDELUX_AGENCY_EMAIL } from '../../constants/constants'

type ContactFormProps = {
  bookingText?: string
  customSubject?: string // Nouveau prop optionnel pour un sujet personnalisé
}

type FormState = {
  firstName: string
  lastName: string
  email: string
  tel: string
  subject: string
  message: string
}

type Errors = Partial<FormState>

export const ContactForm: React.FC<ContactFormProps> = ({
  bookingText = 'Booking DJ',
  customSubject,
}) => {
  const [inputForm, setInputForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    subject: customSubject || bookingText, // Utiliser customSubject ou bookingText par défaut
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})

  useEffect(() => {
    if (customSubject) {
      setInputForm((prev) => ({ ...prev, subject: customSubject }))
    } else {
      setInputForm((prev) => ({ ...prev, subject: bookingText }))
    }
  }, [bookingText, customSubject])

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target
    setInputForm({ ...inputForm, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const validationErrors = validateForm(inputForm)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      const mailtoLink = `mailto:${FREDELUX_AGENCY_EMAIL}?subject=${encodeURIComponent(
        inputForm.subject
      )}&body=${encodeURIComponent(
        `Nom: ${inputForm.firstName} ${inputForm.lastName}\nEmail: ${inputForm.email}\nTéléphone: ${inputForm.tel}\n\n${inputForm.message}`
      )}`
      window.location.href = mailtoLink
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <InputWrapper>
          <HiddenLabel id="firstName">Nom</HiddenLabel>
          <InputField
            type="text"
            name="firstName"
            placeholder="Nom *"
            value={inputForm.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <HiddenLabel id="lastName">Prénom</HiddenLabel>
          <InputField
            type="text"
            name="lastName"
            placeholder="Prénom *"
            value={inputForm.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputWrapper>
          <HiddenLabel id="email">Email</HiddenLabel>
          <InputField
            type="email"
            name="email"
            placeholder="Email *"
            value={inputForm.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <HiddenLabel id="tel">Téléphone</HiddenLabel>
          <InputField
            type="tel"
            name="tel"
            placeholder="Téléphone *"
            value={inputForm.tel}
            onChange={handleChange}
          />
          {errors.tel && <ErrorMessage>{errors.tel}</ErrorMessage>}
        </InputWrapper>
      </InputContainer>
      <LargerInputWrapper>
        <HiddenLabel htmlFor="subject">Sujet</HiddenLabel>
        <SelectField
          id="subject"
          name="subject"
          value={inputForm.subject}
          onChange={handleChange}
          disabled={!!customSubject}
        >
          <option value={customSubject ?? 'Booking DJ'}>
            {customSubject ?? 'Booking DJ'}
          </option>
          <option value="Sound Design">Sound Design</option>
          <option value="Autre">Autre</option>
        </SelectField>
      </LargerInputWrapper>
      <LargerInputWrapper>
        <HiddenLabel id="message">Message</HiddenLabel>
        <TextArea
          name="message"
          placeholder="Message *"
          value={inputForm.message}
          onChange={handleChange}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </LargerInputWrapper>
      <InputWrapper>
        <Button type="submit">Envoyer</Button>
      </InputWrapper>
    </FormContainer>
  )
}
