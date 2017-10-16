import { Component } from "react";
import * as React from 'react';
import {Input,Icon,Alert} from 'antd';
import nodeForge from "node-forge";
import axios from "axios";
import "./login.less";
export default class Login extends Component<{history?:any}, {}>{
    constructor(props:any){
        super(props);
    }
    state = {
        username:'',
        password:'',
        loginErr:false,
        loginErrMsg:'',
        loading:false
    }
    //登录
    login() {
        console.log("@@@@@@@@@@")
        let $this=this;
        if (!$this.state.username || !$this.state.password) {
            $this.setState({
                loginErr:true,
                loginErrMsg:'请输入账号或者密码'
            })
            return;
        }
        $this.setState({
            loading:true
        })
        let md=nodeForge.md.md5.create();
        md.update($this.state.password);
        const passowrd = md.digest().toHex();
        let data = {
            "user_name":$this.state.username,
            "password":passowrd,
            "login_type":1,
            "menu_type":2
        }
        console.log(data);
        axios.post('http://192.168.10.208:8001/fbs/lio/pblin.do?fh=LINLIO0000000J00&resp=bd',{
            params:data
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // fetch('http://192.168.10.208:8001/fbs/lio/pblin.do?fh=LINLIO0000000J00&resp=bd',{
        //     method:'POST',
        //     credentials:'include',
        //     mode:'no-cors',
        //     body:JSON.stringify(data)
        // }).then(function (res) {
        //     console.log(res);
        //     $this.setState({
        //         iconClass:$this.state['loginClass']
        //     })
        //     if(res.ok){
        //         res.json().then(function (data){
        //             if(data.err_code == 1){
        //                 //储存用户信息
        //                 sessionStorage.setItem('user',JSON.stringify(data.user_info));
        //                 sessionStorage.setItem('menu',JSON.stringify(data.menu_info));
        //                 // $this.goNextPage($this);
        //                 console.log($this);
        //                 if ($this.props.history) {
        //                     $this.props.history.push('/body');
        //                 }
        //             }else {
        //                 if (data.msg) {
        //                     $this.setState({
        //                         showErr:true,
        //                         showErrMsg:data.msg
        //                     })
        //                 }
        //             }
        //         })
        //     }else {
                
        //             $this.setState({
        //                 loginErr:true,
        //                 loginErrMsg:'登录失败，请稍后重试'
        //             })
                    
        //     }
        // }).catch(function (err) {
        //     $this.setState({
        //         loginErr:true,
        //         loginErrMsg:'登录失败，请稍后重试'
        //     })
           
        // })
        // console.log(this);
        // if (this.props.history) {
        //     this.props.history.push('/body');
        // }
    }
    inputUsername (e:any) {
        this.setState({
            username:e.target.value
        })
    }
    inputPassword(e:any) {
        this.setState({
            password:e.target.value
        })
    }
    render(){
        
        return(
            <div className="login-in">
                <div className="lg-bg"></div>
                {/* <Header/> */}
                <div className="lg-main">
                    <h1 className="h1">baas</h1>
                    <h3 className="h3">运维管理系统</h3>
                    <Alert showIcon style={{display:this.state.loginErr?'block':'none',color:'#e00'}} type="error" message={this.state.loginErrMsg} />

                    <div className="lg-login-input" style={ {"position":"relative"}}>
                        <Input onPressEnter={this.login.bind(this)} onChange={this.inputUsername.bind(this)} value={this.state.username} id="username" placeholder="帐号" size="large"  type="text"/>
                        <Input 
                            onChange={this.inputPassword.bind(this)}
                            value={this.state.password}
                            id="password" 
                            placeholder="密码" 
                            size="large" 
                            suffix={<Icon type="login" 
                                style={{fontSize:'20px',cursor:'pointer'}}
                                onClick={this.login.bind(this)} 
                            />} 
                            type="password"
                            onPressEnter={this.login.bind(this)}
                        />
                        
                    </div>
                </div>
            </div>
        )
    }

}