import React, {Component} from 'react';
import {Link} from 'react-router';

class Main extends Component{
	render(){

		return(
	<div>
        <a id="frontpage"> <img src='/Logo.png' className="logoimg" /></a> 
     
        <div id="homepage">
             {this.props.children}
         </div>

        <div style={{'borderTop':'1px solid #EEE', 'backgroundColor':'white'}}>
    


            <div className="footer-container" style={{'maxWidth':'1100px','margin':'auto' , 'padding': '20px 0 50px','textAlign':'center'}}>
            <div className="footer-column">
            	<h5 style={{'marginTop':'30px', 'textTransform':'uppercase', 'fontWeight': 'bold'}}>Company</h5>
	            <div>
	            <a href="https://www.swiffshot.com/">Home</a><a href="https://www.swiffshot.com/blog">Blog</a><a href="https://www.swiffshot.com/jobs">Jobs</a>
	            </div>
	         </div>


             <div className="footer-column">
             	<h5 style={{'marginTop': '30px' , 'textTransform' : 'uppercase' , 'fontWeight' : 'bold'}}><a href="https://www.swiffshot.com/download" title="Download Swiffshot" style={{'color':'black' ,'lineHeight':'17px'}}>Download</a></h5>
             	<div><a data-vendor="apple" href="https://itunes.apple.com/us/app/snapchat/id447188370">Swiffshot for iOS</a></div>
             </div>

              <div className="footer-column">
              	 <h5 style={{'marginTop':'30px', 'textTransform': 'uppercase', 'fontWeight' :' bold'}}>Community</h5>
              	 <div><a href="https://support.swiffshot.com/">Support</a><a href="https://support.swiffshot.com/a/guidelines">Community Guidelines</a><a href="https://www.swiffshot.com/safety">Safety Center</a></div>
              </div>
          
        </div>

        </div>

    </div>



			);
 

	}
}

export default Main 
