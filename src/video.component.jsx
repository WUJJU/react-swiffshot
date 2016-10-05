import React,{Component} from 'react';


class Video extends Component{
	render(){
       return(
           <div className="homepage-video">
               <video width="600" height="600"   controls>
                <source src={"http://54.191.86.179:8080/streamer/video/"+this.props.params.id} type="video/mp4" />
             </video>    
          </div>
       	);
	}
}

export default Video

