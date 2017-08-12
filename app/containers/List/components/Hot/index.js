import React, {Component} from 'react';
import $ from 'jquery';
import {HashRouter as Router, Route,Link,Switch,withRouter} from "react-router-dom";

import {hashHistory} from 'react-router';

class Hot extends Component {
    constructor() {
        super();
        this.state = {list: []};
    }
    componentDidMount() {
        $.ajax({
            url: "http://47.93.47.208:3333/product/productList",
            method: 'get',
            dataType: "jsonp",
            jsonp: "cb",
            jsonpCallback: "fn",
            data: null,
            context: this,
            success: (res) => {
                this.setState({
                    list: res
                })
                //console.log(this.state.list);
            },
            error: function (e) {
                console.log("error", e);
            }
        })
    };

    //点击跳转
    handleClick = (value) => {
        console.log(value);
        this.props.history.push({
            pathname: '/content/'+value._id,
            state: {
                id:value._id,
                productImg:value.productImg,
                productName:value.productName,
                price:value.price,
                describe:value.describe,
            }
        });
    };
    render() {
        return (

            <ul className="secondFood">
                {this.state.list.map((item, index) => (
                    <li onClick={() => {
                        this.handleClick(item);
                    }} key={index}>
                        <img src={"http://47.93.47.208:3333/productImg/" + item.productImg}/>
                        <div className="thirdFood">
                            <div>{item.productName}</div>
                            <div>{item.describe}</div>
                        </div>
                        {/*<div className="gt"><Link to="/goodsDetail">&gt;</Link></div>*/}
                    </li>
                ))}
            </ul>

        )
    }

}

export default withRouter(Hot)