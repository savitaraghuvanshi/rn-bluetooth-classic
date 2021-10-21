import NetInfo from '@react-native-community/netinfo'

const CheckIfOffline = async () => {
  let offline = false 
  await NetInfo.fetch().then((state) => {
    console.log('Connection type : ', state.type)
    console.log('isConnected? ', state.isConnected)
    console.log('isInternetReachable?', state.isInternetReachable)
    if (!state.isConnected || !state.isInternetReachable) {
      offline = true
      console.log('Hey you are offline!!! ',offline)     
    }
  }) 
  return offline
} 

export default CheckIfOffline
