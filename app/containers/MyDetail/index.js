/**
 * Created by z on 2017/8/9.
 */
import React,{Component} from 'react';
import './index.less'
export default class MyDetail extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>

                    <nav className="navbar navbar-default navbar-fixed-top">
                        <p style={{fontSize:20}} className="text-center navbar-text"><span className="pull-left back" onClick={()=>history.back()} >&lt;</span>个人资料</p>
                    </nav>
            <div className="userDetail">
                    <ul className="userDetail-List">
                        <li>用户头像
                         <span>
                             <img src="" alt=""/>
                         </span>
                        </li>
                        <li>会员名 <span>山炮进城</span></li>
                        <li>淘宝昵称
                        <span>快来取个有逼格的名字吧</span><span>&gt;</span>
                        </li>
                        <li>我的二维码<span><img src="" alt=""/></span></li>
                        <li>性别
                            <span>男</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
