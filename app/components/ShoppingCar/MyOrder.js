import React,{Component} from 'react';
import {HashRouter as Router,Link} from 'react-router-dom';
import $ from 'jquery';
export default class MyOrder extends Component{
    constructor(){
        super();
        this.state={orderList:[]}
    }
    handleClick=()=>{
        let orderNumber = this.refs.list.attributes.name.value;
        $.ajax({
            method:'GET',
            url:'http://47.93.47.208:3333/order/payOrder',
            dataType:'jsonp',
            jsonp:'cb',
            jsonpCallback:'fn',
            success:(res)=>{
                // console.log(this);
                if(res.code==1){
                    this.props.history.push({
                        pathname:'/orderDetail',
                        state:{orderNumber:111111}
                    });
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    };
    componentWillMount(){
        $.ajax({
            method:'GET',
            url:'http://47.93.47.208:3333/order/getOrderList',
            dataType:"jsonp",
            data:{purchaser:'ww'},
            jsonp:'cb',
            jsonpCallback:'fn',
            success:(res)=>{
                this.setState({orderList:res});
                console.log(res);
            },
            error:function(err){
                console.log('err',err);
            }
        })
    }
    render(){
        return (
            <div className="shoppingCar_wrapper">
                <ul>
                    {this.state.orderList.map((item,index)=>(
                        <li key={item.orderNumber} name={item.orderNumber} ref="list" onClick={this.handleClick}>
                            <div className="order_wrapper">
                                <div className="order_left">
                                    <img src={"http://47.93.47.208:3333/productImg/"+item.productImg} alt=""/>
                                </div>
                                <div className="order_content">
                                    <p>{item.describe}</p>
                                </div>
                                <div className="order_right">
                                    <p className="price">￥{item.price*item.count}</p>
                                    {item.state==1?<p className="state_success">交易完成</p>:<p className="state_success" style={{color:"red"}}>未支付</p>}
                                </div>
                            </div>
                            <div className="order_total">
                                <p style={{marginRight:20}}>共计{item.count}件商品 </p>
                            </div>
                            <div className="order_btn">
                                <button>删除订单</button>
                            </div>
                        </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}