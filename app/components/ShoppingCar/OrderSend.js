/**
 * Created by lenovo on 2017/8/8.
 */
import React,{Component} from 'react';
import $ from 'jquery';
export default class OrderSend extends Component{
    constructor(){
        super();
        this.state={sendList:[]}
    }
    componentDidMount(){
        $.ajax({
            method:'GET',
            url:'http://47.93.47.208:3333/order/getOrderList',
            dataType:"jsonp",
            data:{purchaser:'ww',ordertype:1},
            jsonp:'cb',
            jsonpCallback:'fn',
            success:(res)=>{
                this.setState({sendList:res});
            },
            error:function(err){
                console.log('err',err);
            }
        })
    }
    render(){
        return (
            <div className="shoppingCar_wrapper">
                <ul>
                        {this.state.sendList.map((item,index)=>(
                            <li key={index} onClick={this.handleClick}>
                                <div className="order_wrapper">
                                    <div className="order_left">
                                        <img src={"http://47.93.47.208:3333/productImg/"+item.productImg} alt=""/>
                                    </div>
                                    <div className="order_content">
                                        <p>{item.describe}</p>
                                    </div>
                                    <div className="order_right">
                                        <p className="price">￥{item.price*item.count}</p>
                                        {item.state==1?<p className="state_success">交易完成</p>:<p className="state_success" style={{color:"red"}}>未支付</p>}
                                    </div>
                                </div>
                                <div className="order_total">
                                    <p style={{marginRight:20}}>共计{item.count}件商品 </p>
                                </div>
                                <div className="order_btn">
                                    <button>删除订单</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}