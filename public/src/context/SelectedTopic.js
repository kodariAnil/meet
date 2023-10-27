// SelectedTopic.js
import {createContext, Component} from 'react'

const SelectId = createContext()

class SelectIdProvider extends Component {
  state = {
    isRegistered: true,
    selectedTopic: 'ARTS_AND_CULTURE',
    name: '',
  }

  changeId = ({isRegistered, name, selectedTopic}) => {
    this.setState({isRegistered, name, selectedTopic})
  }

  render() {
    const {isRegistered, selectedTopic, name} = this.state
    const {children} = this.props
    return (
      <SelectId.Provider
        value={{
          isRegistered,
          selectedTopic,
          name,
          changeId: this.changeId,
        }}
      >
        {children}
      </SelectId.Provider>
    )
  }
}

export {SelectId, SelectIdProvider}
