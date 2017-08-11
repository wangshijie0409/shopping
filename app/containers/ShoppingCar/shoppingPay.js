/**
 * Created by lenovo on 2017/8/9.
 */
import React,{Component} from 'react';
import Header from "../../components/Public/Header";
import './index.less';
import './orderDetail.less';
import {HashRouter as Router,Link} from 'react-router-dom';
import OrderDetail from "./orderDetail";
import $ from 'jquery';
export default class ShoppingPay extends Component{
    constructor(){
        super();
        this.state={header:'购物车',goodsDetail:null,count:1,orderNum:''}
    }
    componentDidMount(){
        this.menu=document.getElementsByClassName('shoppingPay_payBox')[0];
        this.pay=document.getElementsByClassName('will_pay')[0];
        this.pay_success=document.getElementsByClassName('pay_success')[0];
        this.pay_sure=document.getElementsByClassName('pay_sure')[0];
        this.pay_cancle=document.getElementsByClassName('pay_cancel')[0];
        //console.log('888888888',this.props.location.state)
        this.setState({goodsDetail:this.props.location.state});
         console.log(0,this.props.location.state);
    }
    //确定结算
    handlePay=()=>{
        this.menu.style.display='block';
        $.ajax({
            method:'GET',
            url:'http://47.93.47.208:3333/order/addOrder',
            dataType:'jsonp',
            jsonp:'cb',
            jsonpCallback:'fn',
            data:{
                purchaser:JSON.parse(localStorage.getItem('myInfo'))._id,//临时从数据库中获取到的用户id，对应的用户名为admin，暂时代表当前登陆的用户，正常情况这个值是根据当前登陆用户的信息来获取的
                productName:this.props.location.state.id,
                count:this.state.count
            },
            success:(res)=>{
                // console.log(this);
                if(res.code==1){
                    this.setState({orderNum:res.orderNumber});
                    //console.log(this.state.orderNum);
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    };
    //取消结算
    handelCancel=()=>{
        this.menu.style.display='none';
    };
    handleClick = ()=>{
        let {id} = this.props.location.state;
        this.props.history.push({
            pathname:'/content/:'+id,
            state:this.props.location.state
        });
    };
    handlePaySuccess=()=>{
        let orderNumber=this.state.orderNum;
        // console.log(this.state.orderNum);
        let {id} = this.props.location.state;
        $.ajax({
            method:'GET',
            url:'http://47.93.47.208:3333/order/payOrder',
            dataType:'jsonp',
            jsonp:'cb',
            jsonpCallback:'fn',
            data:{orderNumber},
            success:(res)=>{
                // console.log(this);
                if(res.code==1){
                    this.pay.style.display='none';
                    this.pay_success.style.display='block';
                    setTimeout(()=>{
                        this.props.history.push({
                            pathname:'/orderDetail/'+orderNumber,
                            state:{...this.state.goodsDetail,orderNumber}
                        });
                    },3000)
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    };
    render(){
        return (
            <div>
                {/* <Header title={this.state.header}/>*/}
                <nav className="navbar navbar-default navbar-fixed-top">
                    <p style={{fontSize:22,color:'black',fontWeight:'bold'}} className="text-center navbar-text"><span className="pull-left back" onClick={this.handleClick} >&lt;</span>购物车</p>
                </nav>
                <div className="order_detail  shopping_pay">
                    <ul>
                        <li>
                            <div className="order_detail_list">
                                <div className="order_detail_top">
                                    <div className="order_detail_left">
                                        {this.state.goodsDetail?<img src={"http://47.93.47.208:3333/productImg/"+this.state.goodsDetail.productImg} alt=""/>:null}
                                    </div>
                                    <div className="order_detail_right">
                                        <p className="order_detail_rightTop">{this.state.goodsDetail?this.state.goodsDetail.describe:''}</p>
                                        <div className="order_detail_rightBottom">
                                            <span>{this.state.goodsDetail?'￥'+this.state.goodsDetail.price:''}</span>
                                            <div className="addCount">
                                                <button className="btn" onClick={()=>{this.state.count>0?this.setState({count:this.state.count-1}):0}}>-</button>
                                                <span className="order_detail_rightBottom_right">+{this.state.count}</span>
                                                <button className="btn" onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="shoppingPay_bottom">
                    <div className="shoppingPay_bottom_left">
                        <p>合计：<b>￥{this.state.goodsDetail?this.state.goodsDetail.price*this.state.count:0}</b></p>
                        <span>(不含运费)</span>
                    </div>
                    <div onClick={this.handlePay} className="shoppingPay_bottom_right">结算</div>
                </div>
                <div className="shoppingPay_payBox">
                    <div className="will_pay">
                        <h3>确认付款</h3>
                        <h3>￥{this.state.goodsDetail?this.state.goodsDetail.price*this.state.count:0}</h3>
                        <div className="shoppingPay_btn">
                            <button onClick={this.handelCancel} className="btn btn-warning pay_cancel">取消</button>
                            <button onClick={this.handlePaySuccess} className="btn btn-primary pay_sure">确定</button>
                        </div>
                    </div>
                    <div className="pay_success">
                        <h3>付款成功</h3>
                        <h3>￥{this.state.goodsDetail?this.state.goodsDetail.price*this.state.count:0}</h3>
                    </div>
                </div>
            </div>
        )
    }
}