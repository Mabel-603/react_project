import React,{Component} from 'react'
import { Form, Input, Button, Checkbox,} from 'antd'
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import "./css/login.less"
import logo from './imgs/logo.jpg'
export default class Login extends Component{

    render(){
    const onFinish = (values) => {
    console.log('Success:', values);
    alert('向服务器发送登录请求')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  this.pwdValidator=(rule, value)=>{
    if(!value){
      return Promise.reject(new Error('密码必须输入!'))
    }else if(value.length < 4){
      return Promise.reject(new Error('密码必须大于等于4位'))
    }else if(value.length > 12){
      return Promise.reject(new Error('密码必须小于等于12位'))
    }else if(!(/^\w+$/).test(value)){
      return Promise.reject(new Error('密码必须是字母、数字或下划线组成'))
    }else{
      return Promise.resolve()
    }
  }
      return(
      <div className="login">
        <header>
           <img src={logo} alt="logo" />
           <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form
      name="basic"
      labelCol={{span: 8,}}
      wrapperCol={{span: 16,}}
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
          {/* 用户名/密码的的合法性要求
         1). 必须输入
         2). 必须大于等于4位
         3). 必须小于等于12位
         4). 必须是字母、数字或下划线组成
        */}
      <Form.Item label="用户名" name="username" rules={[{required: true,message: '用户名必须输入!'},
      {max:12,message:'用户名必须小于等于12位'},
      {min:4,message:'用户名必须大于等于4位'},
      {pattern:/^\w+$/,message:'用户名必须是字母、数字或下划线组成'},

    ]}>
        <Input prefix={<UserOutlined style={{color:'rgba(0,0,0,.5)'}}/>}/> 
      </Form.Item>

    <Form.Item  label={'密'+'\xa0\xa0\xa0\xa0'+'码'} name="password" rules={[
        {validator:this.pwdValidator,required:true}
    ]}>
        <Input.Password prefix={<LockOutlined style={{color:'rgba(0,0,0,.5)'}}/>}/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8,span: 16,}}>
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8,span: 16,}}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>

        </section>
      </div>
      )
    }
}