import * as React from 'react';
// import '../menu.less';
import {Menu,Icon,Button } from 'antd';
const SubMenu = Menu.SubMenu;



export default class MainMenu extends React.Component<{prop?:any}, {}>{
    
    menuNodes:any = [
        {path:'/body/home',title:'首页',icon:'home'},
        {path:'/body/config',title:'参数配置',icon:'user'},
        {path:'/body/cloud',title:'物理机器',icon:'cloud-o'},
        {path:'/body/fee',title:'账本管理',icon:'wallet',children:[
            {path:'/body/fee/accountbook',title:'共享账本',icon:''},
            {path:'/body/fee/leadgerorder',title:'账本节点',icon:''},
            {path:'/body/fee/accredit',title:'授权',icon:''},
            {path:'/body/fee/accountnode',title:'节点',icon:''},
        ]}
    ];
    state = {
        collapsed: false,
    }
    //菜单的展开与收拢
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    collapse(obj:any){
        console.log(this.props.prop);
        this.setState({
            collapsed:true
        })
        console.log(this.props.prop['history'])
        if (this.props.prop['history']) {
            this.props.prop['history'].push(obj.key);
        }
    }
    constructor(props:any) {
        super(props)
    }
    //渲染菜单
    renderMenu () {
        return this.menuNodes.map((value:any,index:any)=>{
            let node:any = value;
            if (node['children']) {
                return (
                    <SubMenu type="mail" key={value.path} title={<span><Icon type={value.icon?value.icon:''}/><span>{value.title}</span></span>}>
                        {value.children.map((value:any,index:any)=>{
                            return (
                                <Menu.Item key={value.path}>
                                    <Icon type={value.icon} />
                                    <span>{value.title}</span>
                                </Menu.Item>
                            )
                        })}
                    </SubMenu>
                )
            }else {
                return (
                    <Menu.Item key={value.path}>
                        <Icon type={value.icon}/>
                        <span>{value.title}</span>
                    </Menu.Item>
                )
            }
        })
    }
    render () {
        return (
            <div style={{ float:'left',width: this.state.collapsed?64:180,height:'calc(100vh - 50px)',background:'#262930' }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ transition:'0.1s',borderRadius:'0',marginBottom:0,width:this.state.collapsed?64:180,background:'#4a5064',borderWidth:'0px' }}>
                <Icon style={{fontSize:'20px'}} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu className="menu"
                defaultSelectedKeys={['/about']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                onClick={this.collapse.bind(this)}
                style={{background:'#262930'}}
                >
                {this.renderMenu()}
                </Menu>
            </div>
        )
    }
}
