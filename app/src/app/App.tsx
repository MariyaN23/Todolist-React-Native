import React, { useCallback, useEffect } from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from './store'
import { initializeAppTC, RequestStatusType } from './app-reducer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../features/Login/Login'
import { logoutTC } from '../features/Login/auth-reducer'
import {View} from "react-native";

type PropsType = {
	demo?: boolean
}

function App({demo = false}: PropsType) {
	const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
	const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
	const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
	const dispatch = useDispatch<any>()

	useEffect(() => {
		dispatch(initializeAppTC())
	}, [])

	const logoutHandler = useCallback(() => {
		dispatch(logoutTC())
	}, [])

	/*if (!isInitialized) {
		return <View>
		</View>
	}*/

	return (
		<BrowserRouter>
			<View>
					<Routes>
						<Route path={'/'} element={<TodolistsList demo={demo}/>}/>
						<Route path={'/login'} element={<Login/>}/>
					</Routes>
			</View>
		</BrowserRouter>
	)
}

export default App
