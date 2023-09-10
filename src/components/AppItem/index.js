import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <li className="appItem-container">
      <img alt={appName} className="app-image" src={imageUrl} />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
