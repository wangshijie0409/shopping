/**
 * Created by z on 2017/8/9.
 */
import React,{Component} from 'react';
import './index.less'
export default class Address extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>

                    <nav className="navbar navbar-default navbar-fixed-top">
                        <p style={{fontSize:20}} className="text-center navbar-text"><span className="pull-left back" onClick={()=>history.back()}>&lt;</span>收货地址</p>
                    </nav>
                <div className="userAddress">
                    <ul className="userAddress-List">
                        <li>收货人
                            <span>山炮</span>
                        </li>
                        <li>联系电话 <span>1333333333</span></li>
                        <li>所在地区
                            <span>xxxx市xxxxx县xxxx沟</span>
                        </li>
                        <li>所在街道<span><img src="" alt=""/></span></li>
                        <li>街道详情
                            <p>
                                2015年4月7日 - 这篇文章主要介绍了javascript结合CSS实现苹果开关按钮特效的方法以及全部代码,效果非常不错,兼容性也很好,有需要的小伙伴自己参考下
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
