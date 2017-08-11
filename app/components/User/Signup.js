import React,{Component} from 'react';
import Header from "../Public/Header";
import './signup.less';
import $ from 'jquery';
export default class Signup extends Component{
    constructor(){
        super();
        this.state={title:"注册"};
    }
    handleChange =()=>{

    };
    handleClick = ()=>{
        let username = this.refs.username.value;
        let password1 = this.refs.password1.value;
        let password11 = this.refs.password11.value;
        let avatar = this.refs.avatar.value;
        let email = this.refs.mail.value;
        if(password1 !== password11){
            this.refs.password1.onfocus;
            this.refs.password1.value = null;
        }else {
            $.ajax({
                url:`http://192.168.43.26:3333/user/signUp`,
                method:'POST',
                dateType:'jsonp',
                jsonp:'cb',
                jsonpCallback:"fn",
                data:{
                    username,
                    password:password1,
                    avatar,
                    email,
                },
                error:function (e) {
                    console.log("error", e);
                },
                success:function (res) {
                    if(res.code==1){
                        history.push("/login");
                    }else {
                        console.log("msg");
                    }
                }
            })
        }
    };
    render(){
        return (
            <div className="row body" >
                <div className="col-xs-12">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <p style={{fontSize:20}} className="text-center navbar-text"><span className="pull-left back" onClick={()=>history.back()} >&lt;</span>注册</p>
                    </nav>
                </div>
                <div className="">
                    <form encType="multipart/form-data" method="post" className="form-horizontal">
                        <div className="form-group user_top">
                            <label style={{lineHeight:2.5}} htmlFor="username" className="col-xs-4 control-label text-right">用户名:</label>
                            <div className="col-xs-8 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </span>
                                <input ref="username" required type="text" placeholder="请输入用户名" className="form-control" id="username" name="username"/>
                            </div>
                        </div>
                        <div className="form-group pass_top">
                            <label style={{lineHeight:2.5}} htmlFor="password" className="col-xs-4 control-label text-right">密&nbsp;&nbsp;&nbsp;码:</label>
                            <div className="col-xs-8 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                <input ref="password1" required type="password" placeholder="请输入密码" className="form-control" id="password" name="password"/>
                            </div>
                        </div>
                        <div className="form-group pass2_top">
                            <label style={{lineHeight:2.5}} htmlFor="password" className="col-xs-4 control-label text-right">确认密码:</label>
                            <div className="col-xs-8 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                <input ref="password11" required type="password" placeholder="请输入密码" className="form-control" id="password" name="password"/>
                            </div>
                        </div>
                        <div className="form-group mail_top">
                            <label style={{lineHeight:2.5}} htmlFor="email" className="col-xs-4 control-label text-right">邮&nbsp;&nbsp;&nbsp;箱:</label>
                            <div className="col-xs-8 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </span>
                                <input ref="mail" required type="email" placeholder="输入你的邮箱" className="form-control" id="email" name="email"/>
                            </div>
                        </div>
                        <div className="form-group file_top">
                            <label style={{lineHeight:2.5}} htmlFor="avatar" className="col-xs-4 control-label text-right">上传头像:</label>
                            <div className="col-xs-8 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-upload"></span>
                                    </span>
                                <input ref="avatar" required type="file" className="form-control" id="avatar" name="avatar"/>
                            </div>
                        </div>
                        <div className="form-group btn_top row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <input  type="button" onClick={this.handleClick} className=" btn btn-primary" value="注册"/>
                            </div>
                        </div>
                        <div className="text-center" style={{marginTop:440}}>
                            <input type="checkbox"  onChange={this.handleChange} checked />
                                <p style={{display:"inline-block"}} className="text-center">我已阅读并同意<a href="">《用户注册条款》</a></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}