import React from "react";
import '../assets/css/authentication.css';

class Header extends React.Component {
    constructor(props){
      super(props);
        this.togglenav = this.togglenav.bind(this);
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
togglenav(e){
    var a = document.getElementsByTagName( 'html' )[0];
    var b = a.classList.contains('nav-open');
   
    if(b){
        a.classList.remove('nav-open');
    }else{
        a.classList.add('nav-open');
    }
}
    render() {

        return( 
            <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
</nav>
        );
    }

}
export default Header;