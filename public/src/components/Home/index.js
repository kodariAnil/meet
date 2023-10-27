import {Component} from 'react'
import {Link} from 'react-router-dom'
import {SelectId} from '../../context/SelectedTopic' // Import your context

import {
  AppContainer,
  NavContainer,
  HomeContainer,
  Heading,
  Description,
  Button,
  MeetupImage,
} from './StyledComponents'

class Home extends Component {
  render() {
    return (
      <AppContainer>
        <NavContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt=" website logo"
          />
        </NavContainer>
        <SelectId.Consumer>
          {value => {
            const {isRegistered, name, selectedTopic} = value
            console.log(isRegistered)
            return isRegistered ? (
              <HomeContainer>
                <Heading>Welcome to Meetup</Heading>
                <Description>Please Register for the topic</Description>
                <Link to="/register">
                  <Button type="button" className="button">
                    Register
                  </Button>
                </Link>
                <MeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  className="meetup-image"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Heading>Hello {name}</Heading>
                <Description>Welcome to {selectedTopic}</Description>
                <MeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  className="meetup-image"
                  alt="meetup"
                />
              </HomeContainer>
            )
          }}
        </SelectId.Consumer>
      </AppContainer>
    )
  }
}

export default Home
