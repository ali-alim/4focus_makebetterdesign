import * as api from "../api"

//action creators 
export default getPosts = () => async (dispatch) => {
    
    try{
        const {data} = await api.fetchPosts();
        // const action = {type: 'FETCH_ALL', payload: []}
        dispatch({type:'FETCH_ALL', payload:data});
    } catch(err) {
        console.log(err.message)
    }

} 
