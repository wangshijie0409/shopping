import React,{Component} from 'react';
import '../../download/font_pxdwvzv2wt57b9/iconfont.css'
//路由HasRouter
import {HashRouter as Router, Route,Link,Switch} from "react-router-dom";
import Home from "../containers/Home/index";
import List from "../containers/List/index";
import ShoppingCar from "../containers/ShoppingCar/index";
import MyCenter from "../containers/MyCenter/index";
import GoodsDetail from '../containers/goodsDetail/index'
import "./index.less"
import Content from "../components/content/Content";
import MyDetail from "../containers/MyDetail/index";
import Address from "../containers/Address/index";

import ShoppingPay from "../containers/ShoppingCar/shoppingPay";
import OrderDetail from "../containers/ShoppingCar/orderDetail";

import Login from "../components/User/Login";
import Signup from "../components/User/Signup";
export default class RouterMap extends Component{
    render(){
        return( //Route 的 render渲染方法 可以选择匹配的正确的路径来显示底部导航
                <Router>
                    <div className="footerBox">
                        <Route render={({match,location})=>{
                            console.log(match);
                            console.log(location);//
                            return ['/','/list','/shoppingCar','/myCenter'].includes(location.pathname)? <ul className="navList" style={{margin:0}}>
                                <li><Link to="/"><i className="iconfont icon-wxbzhuye"></i>首页</Link></li>
                                <li><Link to="/list"><i  className="icon iconfont icon-shangpin-xianxing"></i>特产</Link></li>
                                <li><Link to="/shoppingCar"><i  className="icon iconfont icon-gouwuchetianjia"></i>订单</Link></li>
                                <li><Link to="/myCenter"><i  className="iconfont icon-activity"></i>我的</Link></li>
                            </ul>:null
                            }}/>

                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/list" component={List}/>
                            <Route path="/shoppingCar" component={ShoppingCar}/>
                            <Route path="/myCenter" component={MyCenter}/>
                            <Route path="/content/:id" component={Content}/>
                            <Route path="/myDetail" component={MyDetail}/>
                            <Route path="/address" component={Address}/>
                            <Route path="/goodsDetail" component={GoodsDetail}/>
                            <Route path="/orderDetail" component={OrderDetail} />
                            <Route path="/shoppingPay" component={ShoppingPay} />
                            <Route path="/address" component={Address}/>
                            <Route path="/goodsDetail" component={GoodsDetail}/>
                            <Route path="/login" component={Login}/>
                           <Route path="/signup" component={Signup}/>
                        </Switch>
                    </div>
                </Router>
        )
    }
}
