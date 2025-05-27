import PropTypes from 'prop-types'
function Header({ text = "somya", backgroundColor = "yellow", color = "blue" }) {
  return (
    <header>
        <div className="container">
            <h2>Feedback UI</h2>
        </div>
    </header>
  )
}
Header.propTypes={
    backgroundColor: PropTypes.string,
    text:PropTypes.string,
    color:PropTypes.string


};

export default Header
