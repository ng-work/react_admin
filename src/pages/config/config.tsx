import {Component} from "react";
import * as React from "react";
import { Table} from 'antd';

const columns = [{
    title: '系统编码',
    dataIndex: 'parameterCode',
    key: '1'
    
  }, {
    title: '参数值',
    dataIndex: 'parameterValue',
    key: '2'
  }, {
    title: '参数描述',
    dataIndex: 'parameterDesc',
    key: '3'
  }, {
    title: '参数分组',
    dataIndex: 'parameterGroup',
    key: '4'
  }, {
    title: '参数备注',
    dataIndex: 'parameterRemark',
    key: '5'
  }, {
    title: 'Action',
    key: 'action',
    // fixed: 'right',
    width:100,
    render: () => (
      <span>
        <a href="javascript:;">删除</a>
        <span className="ant-divider" />
        <a href="#" className="ant-dropdown-link">
          修改 
        </a>
      </span>
    ),
  }];
  
//   const data = [];
//   for (let i = 0; i < 46; i++) {
//     data.push({
//       key: i,
//       name: `Edward King ${i}`,
//       age: 32,
//       address: `London, Park Lane no. ${i}`,
//     });
//   }
export default class Config extends Component<{},{}>{
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
        data:[]
      };
      
      


      componentWillMount () {
        // let $this=this;
        let url = "/bizrest/bcbizparameter";
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
                // res.json().then((data)=>{
                //     console.log('--',data);
                //     if (data) {
                //         for(let i=0;i<data.length;i++){
                //             data[i]['key']=data[i]['parameterCode'];
                //         }
                //         $this.setState({
                //             data:data
                //         })
                //     }
                //     console.log($this.state['detail'])
                // })
            }
            
        }).catch((err)=> {
            console.warn('error-------------',err);
        })
    }

      render() {
        const {  selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
          <div>
              {/* <Title text="参数配置"/> */}
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
              </span>
            </div>
            <Table bordered  rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
          </div>
          
        );
      }
}
