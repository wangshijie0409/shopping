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
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <p style={{fontSize:20}} className="text-center navbar-text"><span className="pull-left back" onClick={()=>history.back()} >&lt;</span>个人资料</p>
                    </nav>
                </div>
            </div>
        )
    }
}
