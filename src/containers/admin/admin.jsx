import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {creteDeleteUserInfoAction} from '../../redux/action_creators/login-action'

//从redux中获取状态和操作状态的方法
@connect(
  state => ({userInfo:state.userInfo}),
  {deleteUserInfo:creteDeleteUserInfoAction}
  )
class Admin extends Component{
  componentDidMount(){
    console.log(this.props);
  }
  //退出登录的回调

logout =()=>{
    //触发redux删除所保存的用户信息
  this.props.deleteUserInfo();//不用重定向,页面会根据isLogin自动渲染
}
  //在render里，若想实现跳转，最好用<Redirect>
    render(){
    //从redux中获取user和isLogin
      let {isLogin,user} = this.props.userInfo;
    //判断用户是否登录，若未登录跳转login页面
      if(!isLogin) return <Redirect  to='/login'/>
      else{
        return(
          <div>
            我是Admin组件,你的名字是{user.username}
            <button onClick={this.logout}> 退出登录 </button>
          </div>
          )
      } 
      
    }
}

export default Admin