import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavContainer = styled.div`
  height: 10vh;
  padding: 20px;
`
export const LContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  width: 75%;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const Image = styled.img`
  width: 450px;
  height: 300px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
`
export const Heading = styled.h1`
  color: #334155;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const LabelInput = styled.label`
  font-size: 14px;
  font-font: weight 500;
  font-family: 'Roboto';
  color: #64748b;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputEl = styled.input`
  border: 2px solid #7b8794;
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
  margin: 15px;
  padding: 10px;
  margin-left: 0px;
`
export const SelectionItem = styled.select`
  border: 2px solid #7b8794;
  margin: 15px;
  padding: 10px;
  margin-left: 0px;
`
export const OptionList = styled.option`
  color: #334155;
  font-size: 14px;
  font-family: 'Roboto';
`
export const Button = styled.button`
  border: none;
  border-radius: 15px;
  height: 50px;
  background-color: #1565d8;
  color: #ffffff;
  font-size: 16px;
  font-style: 'Roboto';
  width: 150px;
  padding: 4px 8px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-style: 'Roboto';
  margin-top: 2px;
`
