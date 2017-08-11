/**
 * Created by lenovo on 2017/8/8.
 */
import React,{Component} from 'react';
import {HashRouter as Router,Link} from 'react-router-dom';
import $ from 'jquery';
export default class MyOrder extends Component{
    handleClick=()=>{
        this.props.history.push('/orderDetail');
    };
    componentDidMount(){
        $.ajax({
            method:'GET',
            url:'http://47.93.47.208:3333/order/getOrderList',
            dataType:"jsonp",
            data:{purchaser:'ww'},
            jsonp:'cb',
            jsonpCallback:'fn',
            success:function(res){
                console.log(res);
            },
            error:function(err){
                console.log(err);
            }

        })
    }
    render(){
        return (
            <div className="shoppingCar_wrapper">
                <ul>
                    <li onClick={this.handleClick}>
                            <div className="order_wrapper">
                                <div className="order_left">
                                    <img src="https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1aszpQVXXXXaFaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt=""/>
                                </div>
                                <div className="order_content">
                                    <p>北京地道儿平谷大桃，当日采摘，保证新鲜,北京地道儿平谷大桃,当日采摘，保证新鲜,北京地道儿平谷大桃，当日采摘，保证新鲜,北京地道儿平谷大桃,当日采摘，保证新鲜</p>
                                </div>
                                <div className="order_right">
                                    <p className="price">￥99.<span>9</span></p>
                                    <p className="state_success">交易成功</p>
                                </div>
                            </div>
                            <div className="order_total">
                                <p>共计1件商品 合计：<span>￥99.9（含运费）</span></p>
                            </div>
                            <div className="order_btn">
                                <button>删除订单</button>
                            </div>
                    </li>
                    <li>
                        <div className="order_wrapper">
                            <div className="order_left">
                                <img src="https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1aszpQVXXXXaFaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt=""/>
                            </div>
                            <div className="order_content">
                                <p>北京地道儿平谷大桃，当日采摘，保证新鲜,北京地道儿平谷大桃</p>
                            </div>
                            <div className="order_right">
                                <p className="price">￥99.<span>9</span></p>
                                <p className="state_send">待发货</p>
                            </div>
                        </div>
                        <div className="order_total">
                            <p>共计1件商品 合计：<span>￥99.9（含运费）</span></p>
                        </div>
                        <div className="order_btn">
                            <button>删除订单</button>
                        </div>
                    </li>
                    <li>
                        <div className="order_wrapper">
                            <div className="order_left">
                                <img src="https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1aszpQVXXXXaFaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt=""/>
                            </div>
                            <div className="order_content">
                                <p>北京地道儿平谷大桃，当日采摘，保证新鲜,北京地道儿平谷大桃</p>
                            </div>
                            <div className="order_right">
                                <p className="price">￥99.<span>9</span></p>
                                <p className="state_error">待付款</p>
                            </div>
                        </div>
                        <div className="order_total">
                            <p>共计1件商品 合计：<span>￥99.9（含运费）</span></p>
                        </div>
                        <div className="order_btn">
                            <button>删除订单</button>
                        </div>
                    </li>
                    <li>
                        <div className="order_wrapper">
                            <div className="order_left">
                                <img src="https://img-tmdetail.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/TB1aszpQVXXXXaFaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt=""/>
                            </div>
                            <div className="order_content">
                                <p>北京地道儿平谷大桃，当日采摘，保证新鲜,北京地道儿平谷大桃</p>
                            </div>
                            <div className="order_right">
                                <p className="price">￥99.<span>9</span></p>
                                <p className="state_success">交易成功</p>
                            </div>
                        </div>
                        <div className="order_total">
                            <p>共计1件商品 合计：<span>￥99.9（含运费）</span></p>
                        </div>
                        <div className="order_btn">
                            <button>删除订单</button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}