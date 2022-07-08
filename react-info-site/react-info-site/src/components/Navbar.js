import reactLogo from '../images/icon-small-react.png';

function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt='' />
      <h2 className='[ padding-left-7px color-primary fs-22-25px'>ReactFacts</h2>
      <p className='align-right color-neutral-100'>React Course - Project 1</p>
    </nav>
  )
}

export default Navbar;
