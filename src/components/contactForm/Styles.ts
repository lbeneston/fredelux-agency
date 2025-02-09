import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FormContainer = styled.form`
  margin-top: 30px;

  @media (min-width: 768px) {
    position: relative;
  }
`

export const InputContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background-color: ${colors.lightGrey};
  outline: none;
  cursor: pointer;
  padding: 0 10px;
  font-family: Helvetica, sans-serif;
  font-size: 1.2rem;
  transition: 0.5s;

  &:hover {
    background-color: ${colors.softGrey};
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  &::placeholder {
    color: ${colors.black};
    text-transform: uppercase;
    transition: 0.25s;
  }

  &:focus {
    background-color: ${colors.offWhite};
    transition: background-color 0.5s;

    &::placeholder {
      color: transparent;
    }
  }
`

export const InputWrapper = styled.div`
  border-left: 2px solid ${colors.middleGrey};
  width: 100%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 47.5%;
  }
`

export const LargerInputWrapper = styled.div`
  border-left: 2px solid ${colors.middleGrey};
  width: 100%;
  margin-bottom: 15px;
`

export const HiddenLabel = styled.label`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  height: 1px;
  overflow: hidden;
  width: 1px;
`

export const SelectField = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 40px;
  border: none;
  margin: 0;
  padding-left: 10px;
  background-color: ${colors.lightGrey};
  outline: none;
  cursor: pointer;
  color: ${colors.black};
  font-family: Helvetica, sans-serif;
  font-size: 1.2rem;
  transition: 0.5s;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${colors.softGrey};
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: none;
  background-color: ${colors.lightGrey};
  outline: none;
  cursor: pointer;
  padding: 10px;
  resize: none;
  font-family: Helvetica, sans-serif;
  font-size: 1.2rem;
  transition: 0.5s;

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  &:hover {
    background-color: ${colors.softGrey};
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${colors.offWhite};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.softGrey};
  }

  &::placeholder {
    color: ${colors.black};
    text-transform: uppercase;
    transition: 0.25s;
  }

  &:focus {
    background-color: ${colors.offWhite};
    transition: background-color 0.5s;

    &::placeholder {
      color: transparent;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background-color: ${colors.softGrey};
  outline: none;
  cursor: pointer;
  padding: 0 10px;
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
  font-size: 1.2rem;
  transition: 0.5s ease-in-out;
  color: ${colors.black};

  &:hover {
    background-color: ${colors.middleGrey};
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  span {
    opacity: 0;
    margin-left: -10px;
    transition: 0.5s;
  }

  &:hover span {
    opacity: 1;
    margin-left: 5px;
    transition: 0.5s;
  }
`

export const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: ${colors.error};
  margin-left: 10px;

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`
