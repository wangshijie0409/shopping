import React, {Component} from 'react';
import {HashRouter as Router, Route,Link,Switch,withRouter} from "react-router-dom";
import {hashHistory} from 'react-router';
import $ from 'jquery'
import './index.less'
class List extends Component {
    constructor(){
        super();
        this.state = {arr:[]}
    }
    componentDidMount() {
        $.ajax({
            url: "http://47.93.47.208:3333/product/getHotList",
            method: 'get',
            dataType: "jsonp",
            jsonp: "cb",
            jsonpCallback: "fn",
            data: null,
            context:this,
            success:  (res) =>{
               // console.log(res);
                this.setState({
                    arr:res
                })
            },
            error: function (e) {
                console.log("error", e);
            }
        });
    }

    handleClick = (value) => {
         //console.log(value);
        this.props.history.push({
                pathname: '/content/:'+value._id,
                state: {
                    id:value._id,
                    productImg:value.productImg,
                    productName:value.productName,
                    price:value.price,
                    describe:value.describe,
            },
        });
    };

    /*format=(obj)=>{
        var str="";
        for(var key in obj){
            str+=key+"="+obj[key]+"&"
        }
        return str;
    };*/
    render() {

       // console.log(hashHistory);
        return (
            <div className="container">
                <div className="patch-pull">~~精品推荐~~</div>
                <ul className="containers" id="containers">

                    {this.state.arr.length>0?this.state.arr.map(
                        (item,index)=>(
                            <li className="list-item" onClick={()=>{this.handleClick(item)}} key={index}>
                            {/*    <Router>
                                    <Link to={{pathname:'/Content?'+this.format(item),query:item,hash:'#hash',state:{data:"a"}}}>*/}
                                        <img src={'http://47.93.47.208:3333/productImg/'+item.productImg}/>
                                        <p className="patch-name">{item.productName} </p>
                                        <span className="price">￥{item.price}元/{item.spec}</span>
                                  {/*  </Link>
                                </Router>*/}
                            </li>
                        )):
                        <div className="loadEffect">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="data">数据加载中...</div>
                        </div>
                    }
                </ul>

            </div>
        )
    }
}
export default withRouter(List)


{/*<li className="list-item">
 <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502178067812&di=6f899792cfa11046d6ca100d83abd9ba&imgtype=0&src=http%3A%2F%2Fd6.yihaodianimg.com%2FN07%2FM08%2FF6%2F07%2FCgQI0FVmvFOALCLJAAUSBbOhaEE25100.jpg" alt=""/>
 <p className="patch-name">地道北京平谷大桃 </p>
 <span className="patch-day">当日采摘  清香无比</span>
 <span className="price">￥999</span>
 </li>
 */
}