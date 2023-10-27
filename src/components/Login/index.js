import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {SelectId} from '../../context/SelectedTopic'

import {
  AppContainer,
  LContainer,
  NavContainer,
  LoginContainer,
  Image,
  FormContainer,
  Heading,
  InputContainer,
  LabelInput,
  InputEl,
  SelectionItem,
  OptionList,
  Button,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {
    name: '',
    selectedTopic: 'ARTS_AND_CULTURE',
    isFilled: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onClickRegisterNow = event => {
    event.preventDefault()
    const {name, selectedTopic} = this.state
    const {history} = this.props
    const {changeId} = this.context
    if (name && selectedTopic) {
      this.setState({isFilled: false})
      history.replace('/')

      changeId({
        isRegistered: false,
        name,
        selectedTopic,
      })
    } else {
      this.setState({isFilled: true})
    }
  }

  onChangeSelection = event => {
    this.setState({selectedTopic: event.target.value})
  }

  render() {
    const {name, selectedTopic, isFilled} = this.state
    const {topicsList} = this.props

    return (
      <AppContainer>
        <NavContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt=" website logo"
          />
        </NavContainer>
        <LContainer>
          <LoginContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormContainer>
              <Heading>Let us join</Heading>
              <InputContainer>
                <LabelInput htmlFor="name">NAME</LabelInput>
                <InputEl
                  id="name"
                  value={name}
                  placeholder="Your name"
                  onChange={this.onChangeName}
                />
              </InputContainer>
              <InputContainer>
                <LabelInput htmlFor="topic">TOPICS</LabelInput>
                <SelectionItem
                  key="default"
                  id="topic"
                  value={selectedTopic}
                  onChange={this.onChangeSelection}
                >
                  {topicsList.map(eachList => (
                    <OptionList key={eachList.id} value={eachList.id}>
                      {eachList.displayText}
                    </OptionList>
                  ))}
                </SelectionItem>
              </InputContainer>
              <Button onClick={this.onClickRegisterNow}>Register Now</Button>
              {isFilled && (
                <ErrorMsg>Please enter your name and select a topic</ErrorMsg>
              )}
            </FormContainer>
          </LoginContainer>
        </LContainer>
      </AppContainer>
    )
  }
}

Login.contextType = SelectId
export default withRouter(Login)
