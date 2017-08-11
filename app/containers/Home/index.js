/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
import Slider from "../../components/Slider/index";
import List from "../../components/List/index";
import './index.less'
import Content from "../../components/content/Content";

export default class Home extends Component{
    render(){
        console.log(this.props);//Object {match: Object, location: Object, history: Object, staticContext:
        return(
            <div>
                <div className="row header" style={{backgroundColor:"#eee",margin:0,padding:0}}>
                    <div className="col-xs-12" style={{margin:10}}>
                        <div className="col-xs-10">
                            <input className="form-control" style={{borderRadius:17}} type="text" placeholder="搜索你想要的商品吧"/>
                        </div>
                        <div className="col-xs-2">
                            <span className="search">搜索</span>
                        </div>
                    </div>
                </div>
                    <Slider/>
                    <List/>
            </div>

        )
    }
}
