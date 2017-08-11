import React,{Component} from 'react';
import $ from 'jquery';
import {HashRouter as Router,Link} from 'react-router-dom';
export default class Hot extends Component{
    constructor(){
        super();
        this.state={list:[]};
    }
    ajaxReq=(data=null)=>{
        $.ajax({
            url:"http://47.93.47.208:3333/product/productList",
            method: 'get',
            dataType:"jsonp",
            jsonp:"cb",
            jsonpCallback:"fn",
            data:data,
            success: (res) =>{
                this.setState({
                    list:res
                })
                //console.log(this.state.list);
            },
            error:function(e){
                console.log("error",e);
            }
        })
    }
    componentDidMount(){
        this.ajaxReq();
    }

    render(){
        return(
                <Router>
                    <ul className="secondFood">
                        {this.state.list.map((item,index)=>(
                            <li key={index}>
                                <img src={"http://47.93.47.208:3333/productImg/"+item.productImg}/>
                                <div className="thirdFood">
                                    <div>{item.productName}</div>
                                    <div>{item.describe}</div>
                                </div>
                                <div className="gt"><Link to="/goodsDetail">&gt;</Link></div>
                            </li>
                        ))}
                    </ul>
                </Router>
            )
        }

}
