import './index.css'

const TabItems = props => {
  const {tabItemDetails, updatetabId, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onclickTab = () => {
    updatetabId(tabId)
  }

  const tabClassName = isActive ? 'active' : 'tab-btn'

  return (
    <li>
      <button className={tabClassName} type="button" onClick={onclickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
