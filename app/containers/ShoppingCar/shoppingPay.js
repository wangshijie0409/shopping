/**
 * Created by lenovo on 2017/8/9.
 */
import React,{Component} from 'react';
import Header from "../../components/Public/Header";
import './index.less';
import './orderDetail.less';
import {HashRouter as Router,Link} from 'react-router-dom';
import OrderDetail from "./orderDetail";
export default class ShoppingPay extends Component{
    constructor(){
        super();
        this.state={header:'购物车'}
    }
    componentDidMount(){
        this.menu=document.getElementsByClassName('shoppingPay_payBox')[0];
        this.pay=document.getElementsByClassName('will_pay')[0];
        this.pay_success=document.getElementsByClassName('pay_success')[0];
        this.pay_sure=document.getElementsByClassName('pay_sure')[0];
        this.pay_cancle=document.getElementsByClassName('pay_cancel')[0];
        console.log('888888888',this.props.location.state)
    }
    handlePay=()=>{
        this.menu.style.display='block';
    };
    handleClick = ()=>{
        let {id} = this.props.location.state;
        console.log(id);
        this.props.history.push({
            pathname:'/content/:'+id,
            state:this.props.location.state
        });
    };
    handlePaySuccess=()=>{
        let {id} = this.props.location.state;
        this.pay.style.display='none';
        this.pay_success.style.display='block';
        setTimeout(()=>{
            this.menu.style.display='none';
            console.log(this.props);
            this.props.history.push({
                pathname:'/content/:'+id,
                state:this.props.location.state
            });
        },3000);
    };
    render(){
        return (
                <div>
                   {/* <Header title={this.state.header}/>*/}
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <p style={{fontSize:22,color:'black',fontWeight:'bold'}} className="text-center navbar-text"><span className="pull-left back" onClick={()=>history.back()} >&lt;</span>购物车</p>
                    </nav>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <p style={{fontSize:20}} className="text-center navbar-text"><span className="pull-left back" onClick={this.handleClick} >&lt;</span>购物车</p>
                    </nav>
                    <div className="order_detail  shopping_pay">
                        <ul>
                            <li>
                                <div className="order_detail_list">
                                    <div className="order_detail_top">
                                        <div className="order_detail_left">
                                            <img src="https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1aszpQVXXXXaFaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt=""/>
                                        </div>
                                        <div className="order_detail_right">
                                            <p className="order_detail_rightTop">北京地道儿平谷大桃，当日采摘，保证新鲜,北京地道儿平谷大桃北京地道儿</p>
                                            <div className="order_detail_rightBottom">
                                                <span>￥99.9</span>
                                                <span className="order_detail_rightBottom_right">x1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="shoppingPay_bottom">
                        <div className="shoppingPay_bottom_left">
                            <p>合计：<b>￥300.00</b></p>
                            <span>(不含运费)</span>
                        </div>
                        <div onClick={this.handlePay} className="shoppingPay_bottom_right">结算</div>
                    </div>
                    <div className="shoppingPay_payBox">
                        <div className="will_pay">
                            <h3>确认付款</h3>
                            <h3>￥114.80</h3>
                            <div className="shoppingPay_btn">
                                <button className="btn btn-warning pay_cancel">取消</button>
                                <button onClick={this.handlePaySuccess} className="btn btn-primary pay_sure">确定</button>
                            </div>
                        </div>
                        <div className="pay_success">
                            <h3>付款成功</h3>
                            <h3>￥114.80</h3>
                        </div>
                    </div>
                </div>
        )
    }
}