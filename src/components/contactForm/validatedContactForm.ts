type FormState = {
  firstName: string
  lastName: string
  email: string
  tel: string
  subject: string
  message: string
}

type Errors = Partial<FormState>

export const validateForm = (values: FormState): Errors => {
  const validationErrors: Errors = {}
  const emailRegex = /\S+@\S+\.\S+/
  const telRegex =
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i
  const notNumberRegex = /[^0-9]/g

  if (!values.firstName.trim()) {
    validationErrors.firstName = 'Veuillez renseigner votre nom'
  } else if (!notNumberRegex.test(values.firstName)) {
    validationErrors.firstName = 'Votre nom doit être une chaine de caractères'
  }

  if (!values.lastName.trim()) {
    validationErrors.lastName = 'Veuillez renseigner votre prénom'
  } else if (!notNumberRegex.test(values.lastName)) {
    validationErrors.lastName =
      'Votre prénom doit être une chaine de caractères'
  }

  if (!values.email.trim()) {
    validationErrors.email = 'Veuillez renseigner une adresse email'
  } else if (!emailRegex.test(values.email)) {
    validationErrors.email = "L'adresse email est invalide"
  }

  if (!values.tel.trim()) {
    validationErrors.tel = 'Veuillez renseigner un numéro de téléphone'
  } else if (!telRegex.test(values.tel)) {
    validationErrors.tel = 'Le numéro de téléphone est invalide'
  }

  if (!values.message.trim()) {
    validationErrors.message = "Vous n'avez pas expliqué votre demande"
  } else if (values.message.length < 6) {
    validationErrors.message = 'Votre demande doit faire au moins 6 caractères'
  }

  return validationErrors
}
