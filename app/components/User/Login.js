import React,{Component} from 'react';
import './login.less';
import $ from 'jquery';
import Header from "../Public/Header";
export default class Login extends Component{
    constructor() {
        super();
        this.state = {title:"登录",userInfo:{}}
    }
    handleClick = () => {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        console.log(username, password);
        $.ajax({
            url:'http://47.93.47.208:3333/user/logIn',
            type:'post',
            data:{
                "username":username,
                "password":password,
            },
            error:function (e) {
                console.log("error",e);
            },
            success:(res)=>{
                res=JSON.parse(res);
                this.setState({userInfo:res.userInfo});
                console.log(this.state.userInfo);
                localStorage.setItem("myInfo",JSON.stringify(this.state.userInfo));
                this.props.history.push({
                    pathname:'/myCenter',
                    state:this.state.userInfo
                });

            }
        })
    };
    render(){
        return (
            <div className="row body" >
                <div className="col-xs-12">
                    <Header title={this.state.title}/>
                </div>
                <div className="">
                        <form  method="post" className="form-horizontal" id="formData" name="fileInfo">
                            <div className="form-group user1_top">
                                <label style={{lineHeight:2.5}} htmlFor="username" className="col-xs-3 control-label text-right">用户名:</label>
                                <div className="col-xs-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </span>
                                    <input ref="username" required type="text" placeholder="请输入用户名" className="form-control" id="username" name="username"/>
                                </div>
                            </div>
                            <div className="form-group pas_top">
                                <label style={{lineHeight:2.5}} htmlFor="password" className="col-xs-3 control-label text-right">密&nbsp;&nbsp;&nbsp;码:</label>
                                <div className="col-xs-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input ref="password" required type="password" placeholder="请输入密码" className="form-control" id="password" name="password"/>
                                </div>
                            </div>
                            <div className="form-group btn1_top row">
                                <div className="col-xs-10 col-xs-offset-1">
                                    <input  type="button" onClick={this.handleClick} className=" btn btn-primary" value="登录"/>
                                </div>
                            </div>

                        </form>
                </div>
            </div>
        )
    }
}