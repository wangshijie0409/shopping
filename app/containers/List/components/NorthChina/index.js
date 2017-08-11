import React,{Component} from 'react';
import $ from 'jquery';
export default class Northeast extends Component{
    constructor(){
        super();
        this.state={list:[]};
    }
    ajaxReq=(data=null)=>{
        $.ajax({
            url:"http://47.93.47.208:3333/product/productList",
            method: 'get',
            dataType:"jsonp",
            jsonp:"cb",
            jsonpCallback:"fn",
            data:data,
            success: (res) =>{
                this.setState({
                    list:res
                });
                //console.log(this.state.list);
            },
            error:function(e){
                console.log("error",e);

            }
        })
    }
    componentDidMount(){
        this.ajaxReq({type:'华北特产'});
    }

render(){
    return(
        <ul className="secondFood">
            {this.state.list.map((item,index)=>(
                <li key={index}>
                    <img src={"http://47.93.47.208:3333/productImg/"+item.productImg}/>
                    <div className="thirdFood">
                        <div>{item.productName}</div>
                        <div>{item.describe}</div>
                    </div>
                    <div className="gt">&gt;</div>
                </li>
            ))}
        </ul>
    )
}

}
