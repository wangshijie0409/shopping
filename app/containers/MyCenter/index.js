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
        this.state={title:"个人中心",myInfo:null}
    }
    componentWillMount(){
        let myInfo=localStorage.getItem('myInfo');
        if(myInfo){
            // 如果为true，表示已登陆
            this.setState({flag:true});
        }
    }

    logout=()=>{
        this.setState({flag:false},()=>{
            localStorage.removeItem('myInfo');
            location.reload();
        });
    };
    render(){
        let Content = () => (
            localStorage.getItem('myInfo') ?
                <div className="user">
                    <div className="userAvatar">
                        <img src={"http://47.93.47.208:3333/userImg/"+JSON.parse(localStorage.getItem('myInfo')).avatar} alt=""/>
                        <span>
                            {JSON.parse(localStorage.getItem('myInfo')).username}
                        </span>
                    </div>
                    <Link to="/shoppingCar">
                        <div className="userMsg"><a href="javascript;">我的订单 <span
                            className="arrow pull-right">&gt;</span></a></div>
                    </Link>

                    <div className="userList">
                        <p>我的信息 <span className="arrow pull-right">&gt;</span></p>
                        <div className="hid">
                            <Link to="/myDetail"><p>个人信息<span className="arrow pull-right">&gt;</span></p></Link>
                            <Link to="/address"><p>收获地址<span className="arrow pull-right">&gt;</span></p></Link>
                        </div>
                    </div>
                    <div className="btnLogout btn btn-primary">
                        <div onClick={this.logout}>退出登录</div>
                    </div>
                </div>
                :
                <div className="btnAll">
                    <Link to="/login">
                        <button className="btn btn-primary">登录</button>
                    </Link>
                    <br/>
                    <Link to="/signup">
                        <button className="btn btn-default">注册</button>
                    </Link>
                </div>
        );
        return(
            <Router>
                <div className="myCenter">
                    <Header title={this.state.title}/>
                   <Content/>
                </div>
            </Router>
        )
    }
}






