import axios from "axios";

const BaseURL = "https://basic-blog.teamrabbil.com/api"

export async function blogCategories(){
    let response = await  axios.get(BaseURL+"/post-categories")
    if (response.status === 200){
        return response.data;
    }else{
        return [];
    }
}
export async function blogLatest(){
    let response = await  axios.get(BaseURL+"/post-newest")
    if (response.status === 200){
        return response.data;
    }else{
        return [];
    }
}
export async function blogByCategories(id){
    let response = await  axios.get(BaseURL+"/post-list/"+id)
    if (response.status === 200){
        return response.data;
    }else{
        return [];
    }
}
export async function blogDetails(id){
    let response = await  axios.get(BaseURL+"/post-details/"+id)
    if (response.status === 200){
        return response.data;
    }else{
        return [];
    }
}