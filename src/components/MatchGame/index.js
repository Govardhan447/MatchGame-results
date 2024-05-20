import {Component} from 'react'

import TabItems from '../TabItems'
import GameImageItems from '../GameImageItems'
import './index.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class MatchGame extends Component {
  state = {
    tabsItems: tabsList,
    activeTabId: tabsList[0].tabId,
  }

  componentDidMount() {
    const {timerStart} = this.props
    timerStart()
  }

  componentWillUnmount() {
    const {timerId} = this.props

    clearInterval(timerId)
  }

  updatetabId = id => {
    const {tabsItems} = this.state
    const activeTab = tabsItems.filter(item => item.tabId === id)
    this.setState({activeTabId: activeTab[0].tabId})
  }

  getMatchingListDetails = isMatching => {
    const {getMatchingList} = this.props

    if (isMatching === 'notMatching') {
      getMatchingList(isMatching)
    } else {
      getMatchingList(isMatching)
    }
  }

  matchingImage = id => {
    const {randomImageDetails} = this.props

    console.log(randomImageDetails.id)

    const matchingStatus = randomImageDetails.id === id
    if (matchingStatus) {
      this.getMatchingListDetails(randomImageDetails)
    } else {
      this.getMatchingListDetails('notMatching')
    }
  }

  render() {
    const {tabsItems, activeTabId} = this.state
    const {imageListItems} = this.props
    const filterImageList = imageListItems.filter(
      item => item.category === activeTabId,
    )

    return (
      <>
        <ul className="tabid-container">
          {tabsItems.map(eachItem => (
            <TabItems
              tabItemDetails={eachItem}
              key={eachItem.tabId}
              updatetabId={this.updatetabId}
              isActive={eachItem.tabId === activeTabId}
            />
          ))}
        </ul>
        <ul className="thumbnail-container">
          {filterImageList.map(item => (
            <GameImageItems
              imageDetails={item}
              key={item.id}
              matchingImage={this.matchingImage}
            />
          ))}
        </ul>
      </>
    )
  }
}
export default MatchGame
