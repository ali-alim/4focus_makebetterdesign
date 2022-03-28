import * as api from "../api"

//action creators 
export const getPosts = () => async (dispatch) => {
    
    try{
        const {data} = await api.fetchPosts();
        // const action = {type: 'FETCH_ALL', payload: []}
        dispatch({type:'FETCH_ALL', payload:data});
    } catch(err) {
        console.log(err.message)
    }

} 

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = api.createPost(post);
        dispatch({type: 'CREATE', payload: data})
    } catch(err) {console.log(err.message)}
}

}
