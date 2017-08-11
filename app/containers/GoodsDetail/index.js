import React,{Component} from 'react';
import big from './big.jpg';
import './index.less';
export default class GoodsDetail extends Component{
render(){
    return(
        <div className="num">
            <div className="one">
                <div>
                    <span>&lt;</span>
                    <span>北京平谷大桃</span>
                </div>
                <img src={big}/>


            </div>
            <div className="two">

                    2222

            </div>
            <div className="three">
                333
            </div>
        </div>
    )
}

}
