import React from 'react';
import { Link } from 'react-router';


class App extends React.Component{
 constructor(props){
   super(props);
 }

 componentDidMount(){
   window.jQuery('.button-collapse').sideNav();

 }

 links() {

   let navs = [
     {path: '/', text: 'Home'},
     {path: '/about', text: 'About' },
     {path: '/songs', text: 'Courses'}
   ]
   let active = this.props.location.pathname === navs.path ? "active" : "";
   return navs.map( (nav, i) => {
     return (<li className={active} key={i}><Link to={nav.path}>{nav.text}</Link></li>);
   });
 }

 render(){
   return(
     <div>
       <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo">CANVAS Clone</a>
           <a href="#" data-activates="mobile" className="button-collapse">
             <i className="material-icons">menu</i>
           </a>
           <ul className="right hide-on-med-and-down">
             {this.links()}
           </ul>
           <ul className="side-var" id="mobile">
             {this.links()}
           </ul>
         </div>
       </nav>
         {this.props.children}
     </div>
   )
 }
}

export default App;
