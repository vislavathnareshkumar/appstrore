import './index.css'

const TabItem = props => {
  const {tab, isActive, onClickTab} = props

  const {tabId, displayText} = tab

  const classNames = isActive ? 'button btn-active' : 'button'

  const onClickButton = () => {
    onClickTab(tabId)
  }
  return (
    <li className="tabItem-container">
      <button onClick={onClickButton} type="button" className={classNames}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
