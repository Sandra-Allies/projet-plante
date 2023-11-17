import './Popup.scss'
import LoremIpsum from './LoremIpsum'

const Popup = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <LoremIpsum />
        <button className="modal-button"
        onClick={handleClose}>Close</button>
      </section>
    </div>
  )
}

export default Popup
