import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe'; //轮播图插件
import './index.less';
export default class Slider extends Component{
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    render(){
        let opts = {
            continuous: true,
            auto:3000,
            disableScroll:true,
            speed:400,
            callback:(index)=>{
                this.setState({
                    index
                });
            }
        };
        return (
            <div style={{marginTop:50}}>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div className="sliders">
                        <img src="http://img2.imgtn.bdimg.com/it/u=3226368598,158213272&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <div className="sliders">
                        <img src="http://img5.imgtn.bdimg.com/it/u=2073518145,1336597616&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <div className="sliders">
                        <img src="http://img4.imgtn.bdimg.com/it/u=2223778679,2274352251&fm=26&gp=0.jpg" alt=""/>
                    </div>

                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?"active":""}></li>
                    <li className={this.state.index==1?"active":""}></li>
                    <li className={this.state.index==2?"active":""}></li>
                </ul>
            </div>
        )
    }
}
