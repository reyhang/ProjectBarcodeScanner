import React, {createContext,useEffect,useReducer} from 'react'
import jwtDecode from 'jwt-decode'
import axios from '../axios'
import StackNavigator from '../navigation/RootNavigation'
import LoginScreen from '../screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const initalState = {
    isAuthenticated : false,
    isInitialised : false,
    user: null, 
}

const isValidToken = (token)=>{
    if(!token){
        console.log('failed access')
        return false
    }
    const decodedToken = jwtDecode(token)
    const currentTime = Date.now()/1000
    return  decodedToken.exp>currentTime
}

const setSession = (token)=>{
    if(token){
        localStorage.setItem('token',token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }else{
        localStorage.removeItem('token')
    }
}

const reducer = (state,action)=>{
    switch (action.type){
        case 'INIT':{
            const {isAuthenticated,user}=action.payload
            return {
                ...state,
                isAuthenticated,
                isInitialised:true,
                user,
            }
        }
        case 'LOGIN':{
            const {user}=action.payload
            return{
                ...state,
                isAuthenticated:true,
                user,
            }
        }
        case 'LOGOUT': {
            return{
                ...state,
                isAuthenticated:false,
                user:null
            }
        }
        default :{
            return{...state}
        }
    }
}

const AuthContext = createContext({
    ...initalState,
    method:'JWT',
    login:()=>Promise.resolve(),
    logout:()=>{<StackNavigator>
        <Stack.Screen name="Login" component={LoginScreen} />
    </StackNavigator>},
})

export const AuthProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,initalState)

    const login = async (data)=>{
        const response = await axios.post(`http://localhost:3000/admin-repo`,{
            email:data.email,
            password:data.password,
        })
        const {token,id,email,surname}=response.data
        setSession(token)
        dispatch({
            type:'LOGIN',
            payload:{
                user:{
                    id,
                    email,
                    surname
                }
            }
        })
    }

    const logout=()=>{
        setSession(null)
        dispatch({type:'LOGOUT'})
    }

    useEffect(()=>{
        (async ()=>{
            try {
                const token = window.localStorage.getItem('token')

                if(token&&isValidToken(token)){
                    setSession(token)
                    dispatch({
                        type:'INIT',
                        payload:{
                            isAuthenticated:true,
                        }
                    })
                }else{
                    dispatch({
                        type:'INIT',
                        payload:{
                            isAuthenticated:false,
                            user:null,
                        }
                    })
                }
                
            } catch (error) {
                dispatch({
                    type:'INIT',
                    payload:{
                        isAuthenticated:false,
                    }
                })
            }
        })()
    },[])
    

    if(!state.isInitialised){
        return <div>Loading</div>
    }
    return(
        <AuthContext.Provider
        value={{
            ...state,
            method:'JWT',
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext