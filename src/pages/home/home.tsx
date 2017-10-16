import React,{Component} from "react";
import { Table,Tabs } from 'antd';
import {
  
  Link
} from 'react-router-dom';
const TabPane = Tabs.TabPane;
export default class Ucbody extends Component<{},{}>{
	state = {
		data:[],
		data1:[],
		data2:[],
		data3:[]
      };
	componentWillMount () {
		let $this=this;
		// 个人待审批
        let url = 'http://192.168.10.208:8001/fbs/bizrest/bcbizcertifcationuser/?query={"$and":[{"status":{"$in":[1,2]}}]}';
        fetch(url,{
            method:'GET',
            credentials:'include',
            mode:'no-cors',
        }).then(function (res) {
            console.log("config------")
            console.log(res)
            if(res.status == 406 || res.status == 401){
                //$this['bar'].MDComponent.show({message:'您的登录信息已超时，请重新登录！'})
                window.location.href='/uc/login'
                return;
            }
            if(res.ok){
                console.log(res,res.json);
                res.json().then((data)=>{
                    console.log('--',data);
                    if (data) {
                        for(let i=0;i<data.length;i++){
                            data[i]['key']=data[i]['userId'];
                        }
                        $this.setState({
                            data:data
                        })
                    }
                })
            }
            
        }).catch((err)=> {
            console.warn('error-------------',err);
		})
		
		// 个人已审批
		let url1 = 'http://192.168.10.208:8001/fbs/bizrest/bcbizcertifcationuser/?query={"$and":[{"status":{"$in":[3,4]}}]}';
        fetch(url1,{
            method:'GET',
            credentials:'include',
            mode:'no-cors',
        }).then(function (res) {
            console.log("config------")
            console.log(res)
            if(res.status == 406 || res.status == 401){
                //$this['bar'].MDComponent.show({message:'您的登录信息已超时，请重新登录！'})
                window.location.href='/uc/login'
                return;
            }
            if(res.ok){
                res.json().then((data)=>{
                    console.log('--',data);
                    if (data) {
                        for(let i=0;i<data.length;i++){
                            data[i]['key']=data[i]['userId'];
                        }
                        $this.setState({
                            data1:data
                        })
                    }
                })
            }
            
        }).catch((err)=> {
            console.warn('error-------------',err);
		})
		
		// // 企业待审批
		let url2 = 'http://192.168.10.208:8001/fbs/bizrest/bcbizcertifcationorganize/?query={"$and":[{"status":{"$in":[1,2]}}]}';
        fetch(url2,{
            method:'GET',
            credentials:'include',
            mode:'no-cors',
        }).then(function (res) {
            console.log("config------")
            console.log(res)
            if(res.status == 406 || res.status == 401){
                //$this['bar'].MDComponent.show({message:'您的登录信息已超时，请重新登录！'})
                window.location.href='/uc/login'
                return;
            }
            if(res.ok){
                res.json().then((data)=>{
                    console.log('--',data);
                    if (data) {
                        for(let i=0;i<data.length;i++){
                            data[i]['key']=data[i]['userId'];
                        }
                        $this.setState({
                            data2:data
                        })
                    }
                })
            }
            
        }).catch((err)=> {
            console.warn('error-------------',err);
		})
		// 企业已审批
		let url3 = 'http://192.168.10.208:8001/fbs/bizrest/bcbizcertifcationorganize/?query={"$and":[{"status":{"$in":[3,4]}}]}';
        fetch(url3,{
            method:'GET',
            credentials:'include',
            mode:'no-cors',
        }).then(function (res) {
            console.log("config------")
            console.log(res)
            if(res.status == 406 || res.status == 401){
                //$this['bar'].MDComponent.show({message:'您的登录信息已超时，请重新登录！'})
                window.location.href='/uc/login'
                return;
            }
            if(res.ok){
                res.json().then((data)=>{
                    console.log('--',data);
                    if (data) {
                        for(let i=0;i<data.length;i++){
                            data[i]['key']=data[i]['userId'];
                        }
                        $this.setState({
                            data3:data
                        })
                    }
                })
            }
            
        }).catch((err)=> {
            console.warn('error-------------',err);
        })
    }

    

    render(){
		const columns = [
			{
				title: '名称',
				dataIndex: 'realName',
				width: "20%"
			}, {
				title: '认证状态',
				dataIndex: 'status',
				width: "20%",
			}, 
			{
				title: '申请时间',
				dataIndex: 'createdTime',
				width:"20%"
			},
			{
				title:"业务受理人",
				dataIndex:"reserved1",
				width:"20%"
			},
			{
				title: '操作',
				key: 'action',
				width:100,
				render: (text:any, record:any) => {
					return (
						<span>
							<Link to={`/uc/examineper/${record.userId}`} className="ant-dropdown-link">
								处理
							</Link>
						</span>
					)
				},
			}
		];
		const columns1 = [
			{
				title: '名称',
				dataIndex: 'realName',
				width: "20%"
			}, {
				title: '认证状态',
				dataIndex: 'status',
				width: "20%",
			}, 
			{
				title: '申请时间',
				dataIndex: 'createdTime',
				width:"20%"
			},
			{
				title:"业务受理人",
				dataIndex:"reserved1",
				width:"20%"
			}
		];
		
      
        // const BasicExample = () => (
        //     <Router basename="/uc/ucbody/">
        //       <div>
        //         {/* <App/> */}
        //         <Route exact path="/" component={Home}/>
        //         <Route path="/personalend" component={personalend}/>
        //         <Route path="/enterprisestay" component={enterprisestay}/>
        //         <Route path="/enterpriseend" component={enterpriseend}/>
        //       </div>
        //     </Router>
		// )
		
		// const Home = () => (
		// 	<div>
		// 		<Table bordered columns={columns} dataSource={this.state.data} scroll={{ y: 350 }} />
		// 	</div>
		// )
          
		// const personalend = () => (
		// 	<div>
		// 		<Table bordered columns={columns1} dataSource={this.state.data1} scroll={{ y: 350 }} />
		// 	</div>
		// )
		
		// const enterprisestay = () => (
		// 	<div>
		// 		<Table bordered columns={columns} dataSource={this.state.data2} scroll={{ y: 350 }} />
		// 	</div>
		// )
		
		// const enterpriseend = () => (
		// 	<div>
		// 		<Table bordered columns={columns1} dataSource={this.state.data3} scroll={{ y: 350 }} />
		// 	</div>
		// )
               
        return(
            <div>
				{/* <Title text="首页"/> */}
                <Tabs type="card">
					<TabPane tab="个人待审批" key="1">
						<Table bordered columns={columns} dataSource={this.state.data} scroll={{ y: 350 }} />
					</TabPane>
					<TabPane tab="个人已审批" key="2">
						<Table bordered columns={columns1} dataSource={this.state.data1} scroll={{ y: 350 }} />
					</TabPane>
					<TabPane tab="企业待审批" key="3">
						<Table bordered columns={columns} dataSource={this.state.data2} scroll={{ y: 350 }} />
					</TabPane>
					<TabPane tab="企业已审批" key="4">
						<Table bordered columns={columns1} dataSource={this.state.data3} scroll={{ y: 350 }} />
					</TabPane>
			  	</Tabs>
            </div>
        )
    }
}


// class App extends React.Component {
//   state = {
//     current: 'a',
//   }
//   handleClick = (e) => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   }
//   render() {
//     return (
// 		<Menu
// 			onClick={this.handleClick}
// 			selectedKeys={[this.state.current]}
// 			mode="horizontal"
// 		>
// 			<Menu.Item key="a">
// 				<Icon type="main"/><Link to="/">个人待审批</Link>
// 			</Menu.Item>
// 			<Menu.Item key="b">
// 				<Icon type="appstore"/><Link to="/personalend">个人已审批</Link>
// 			</Menu.Item>
// 			<Menu.Item key="c">
// 				<Icon type="appstore"/><Link to="/enterprisestay">企业待审批</Link>
// 			</Menu.Item>
// 			<Menu.Item key="d">
// 				<Icon type="appstore"/><Link to="/enterpriseend">企业已审批</Link>
// 			</Menu.Item>
// 		</Menu>
//     );
//   }
// }

