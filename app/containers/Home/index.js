/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
import Slider from "../../components/Slider/index";
import List from "../../components/List/index";
import $ from 'jquery'
import './index.less'
import Content from "../../components/content/Content";
export default class Home extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    btnClick=()=>{
        console.log(this.refs.val.value);
        $.ajax({
            url: "http://47.93.47.208:3333/product/getHotList",
            method: 'get',
            dataType: "jsonp",
            jsonp: "cb",
            jsonpCallback: "fn",
            data: null,
            context:this,
            success:  (res) =>{
                 console.log(res);
                 this.setState({
                     data:res.length>0?res.find(item=>{
                     return item.productName==this.refs.val.value
                 }):''
                 })
            },
            error: function (e) {
                console.log("error", e);
            }
        });
        console.log(this.data);
    }
    render(){
        return(
            <div>
                <div className="row header" style={{backgroundColor:"#eee",margin:0,padding:0}}>
                    <div className="col-xs-12" style={{margin:10}}>
                        <div className="col-xs-10">

                            <input ref='val' className="form-control" style={{borderRadius:17}} type="text" placeholder="搜索你想要的商品吧"/>
                        </div>
                        <div className="col-xs-2">
                            <span className="search" onClick={this.btnClick}>搜索</span>
                        </div>
                    </div>
                </div>
                    <Slider/>
                    <List/>
            </div>

        )
    }
}
