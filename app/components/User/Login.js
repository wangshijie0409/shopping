import React,{Component} from 'react';
import './login.less';
import Header from "../Public/Header";
export default class Login extends Component{
    constructor(){
        super();
        this.state={title:"登录"}
    }
    render(){
        return (
            <div className="row body" >
                <div className="col-xs-12">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <p style={{fontSize:20}} className="text-center navbar-text"><span className="pull-left back" onClick={()=>history.back()} >&lt;</span>登录</p>
                    </nav>
                </div>
                <div className="">
                        <form  method="post" className="form-horizontal">
                            <div className="form-group user1_top">
                                <label style={{lineHeight:2.5}} htmlFor="username" className="col-xs-3 control-label text-right">用户名:</label>
                                <div className="col-xs-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </span>
                                    <input required type="text" placeholder="请输入用户名" className="form-control" id="username" name="username"/>
                                </div>
                            </div>
                            <div className="form-group pas_top">
                                <label style={{lineHeight:2.5}} htmlFor="password" className="col-xs-3 control-label text-right">密&nbsp;&nbsp;&nbsp;码:</label>
                                <div className="col-xs-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input required type="password" placeholder="请输入密码" className="form-control" id="password" name="password"/>
                                </div>
                            </div>
                            <div className="form-group btn1_top row">
                                <div className="col-xs-10 col-xs-offset-1">
                                    <input  type="button" className=" btn btn-primary" value="登录"/>
                                </div>
                            </div>

                        </form>
                </div>
            </div>
        )
    }
}