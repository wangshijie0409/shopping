/**
 * Created by lenovo on 2017/8/8.
 */
import React,{Component} from 'react';
export default class Header extends Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <p style={{fontSize:23,fontWeight:'bold',color:'black'}} className="text-center navbar-text">{this.props.title}</p>
                </nav>
            </div>
        )
    }
}
