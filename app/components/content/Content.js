import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import './Content.less'
class Content extends Component{
    constructor(props){
        super(props);
        this.state={info:{}};

    };
    componentWillMount() {
        let state = this.props.location.state;
        if(state){
            this.setState({info:this.props.location.state});

        }else{
            let id = this.props.match.params.id;
            this.setState({info:this.props.location.state});
            console.log(this.state.info,0)
        }

    };
    handleClick = () => {
        this.props.history.push({
            pathname:'/'
        })
    };
    btnClick=()=>{
        this.props.history.push({
            pathname:'/shoppingPay',
            state:this.props.location.state
        });
    };
    render(){
        localStorage.setItem('product',JSON.stringify(this.state.info));
       // let info=JSON.parse(localStorage.getItem('product');
        //console.log(9999,this.state.info);
        let info=this.state.info;
        console.log(info,111);
        // console.log(this.props.location);
        //let s=this.props.location.search.split("?")[1];
        //let query=eval("({"+s.replace(/&/g,"',").replace(/=/g,":'")+"})");
       // console.log(s,query);
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <p style={{fontSize:22,color:'black',fontWeight:'bold'}} className="text-center navbar-text"><span className="pull-left back" onClick={this.handleClick} >&lt;</span>商品详情</p>
                </nav>
                <div className="product-photo">
                  {
                  this.state.info?<img src={"http://47.93.47.208:3333/productImg/"+ this.state.info.productImg} alt=""/>:''
                  }
              </div>
                <div className="productName">
                    {this.state.info?this.state.info.productName:''}
                    <span className="sell">&nbsp;老板推荐&nbsp;</span>
                </div>
                <p className="describe">
                     {this.state.info?this.state.info.describe:''}
                </p>
                <span className="price">
                       {this.state.info?'￥'+this.state.info.price+'元':''}
                       <span className="price-sell">&nbsp;促销产品&nbsp;</span>
                </span>
                <div className="address">配送地址</div>
                <div className="address-detail">
                    北京市昌平区回龙观东大街
                </div>
                <div className="buy" onClick={this.btnClick}>
                   <span>立即购买</span>
                </div>
            </div>
        )
    }
}

export default withRouter(Content)



