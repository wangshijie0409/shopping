/**
 * Created by lenovo on 2017/8/9.
 */
import React,{Component} from 'react';
import Header from "../../components/Public/Header";
import './index.less';
import './orderDetail.less';
import {HashRouter as Router,Link} from 'react-router-dom';
export default class OrderDetail extends Component{
    constructor(){
        super();
        this.state={header:'订单详情'}
    }
    handleClick=()=>{
        this.props.history.push('/shoppingPay');
    }
    render(){
        return (
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <p style={{fontSize:20}} className="text-center navbar-text"><span className="pull-left back" onClick={()=>history.back()} >&lt;</span>订单详情</p>
                    </nav>
                    <div className="order_detail">
                        <div className="order_detail_state">交易成功</div>
                        <section>
                            <div  onClick={this.handleClick} className="order_detail_list">
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
                                <p className="order_detail_price">商品总价<span className="pull-right">￥99.9</span></p>
                                <p className="order_detail_price">运费<span className="pull-right">￥0.00</span></p>
                                <p className="order_detail_price">订单总计<span className="pull-right">￥99.9</span></p>
                                <p className="order_detail_price">实付款<span className="pull-right">￥99.9</span></p>
                            </div>
                            <ul>
                                <li>订单编号：111</li>
                                <li>交易时间：111</li>
                                <li>创建时间：111</li>
                                <li>付款时间：111</li>
                            </ul>
                        </section>

                    </div>
                </div>
        )
    }
}