import logo from "../Images/react.png";

const Header = () => {
    return (
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    );
  }
  
  function MainHeader() {
    return (
      <div className="pt-2 py-1 pl-2" style={{backgroundColor: 'black'}}>
        <img src={logo} style={{height: "35px", verticalAlign: "top"}} alt=''></img>
        <span className="h2 pt-4 text-white-50">Learning about React</span>
      </div>
    );
  }
  
  const headerStyle={
    color: 'purple'
  };
  
  function SubHeader() {
    return (
      <p style={{color: headerStyle, backgroundColor: 'gray'}}>Get those things done!</p>
    )
  }

  export default Header;