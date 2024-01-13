import React from 'react'
import AuthStack from './AuthStack';
import UserStack from './UserStack';

export default function StackNavigator() {
    const isLogin = false;
    return (
      <>
        {isLogin ? <UserStack /> : <AuthStack />}
      </>
    )
}