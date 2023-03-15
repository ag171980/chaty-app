const url = "http://localhost:4000/"


export const signup = async () => {
    let endpoint = url;
    const response = await fetch(endpoint)
    if (response.status === 200) {
        console.log(response)
    }
}