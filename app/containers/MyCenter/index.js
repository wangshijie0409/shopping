/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
import './index.less'
import Header from "../../components/Public/Header";
import {HashRouter as Router, Route, Link} from 'react-router-dom';
export default class MyCenter extends Component{
    constructor(){
        super();
        this.state={title:"个人中心"}
    }

    render(){
        return(
        <Router>
            <div className="myCenter">
                <Header title={this.state.title}/>
                <div className="user">
                    <div className="userAvatar">
                        <img src="" alt=""/>
                        <span>用户名</span>
                    </div>
                    <Link to="/shoppingCar">
                        <div className="userMsg"><a href="javascript;">我的订单 <span className="arrow pull-right">&gt;</span></a></div>
                    </Link>

                    <div className="userList">
                        <p>我的信息 <span className="arrow pull-right">&gt;</span></p>
                        <div className="hid">
                            <Link to="/myDetail"><p>个人信息<span className="arrow pull-right">&gt;</span></p></Link>
                            <Link to="/address"><p>收获地址<span className="arrow pull-right">&gt;</span></p></Link>
                        </div>

                    </div>
                </div>
            </div>
        </Router>

        )
    }
}
