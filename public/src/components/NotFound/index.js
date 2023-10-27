import {
  NotFoundContainer,
  Description,
  Heading,
  Image,
} from './StyledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="image"
    />
    <Heading className="heading">Page Not Found</Heading>
    <Description className="description">
      We are Sorry, the page you requested could not be found
    </Description>
  </NotFoundContainer>
)

export default NotFound
