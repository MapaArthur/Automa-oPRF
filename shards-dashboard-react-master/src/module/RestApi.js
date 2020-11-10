export default class RestApi{
    static URL = "http://localhost:53226/api";
    
    static httpGet = (url) => fetch(url).then((res) => res.json());

    static httpMethod(method, url, body){
        let init = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method,
            body: JSON.stringify(body)
            
        };
        
        return fetch(url, init).then((res) => res.json());
    }
    
    static InsertUser = (body) => RestApi.httpMethod("POST", `${RestApi.URL}/User/CreateUser`, body);
    static GetSystem = (description, initials, email) => RestApi.httpGet(`${RestApi.URL}/GetSystem?description=${description}&initials=${initials}&email=${email}`);
    static GetByID = (id) => RestApi.httpGet(`${RestApi.URL}/GetForEdit?id=${id}`);
    static UpdateSystem = (id,body) => RestApi.httpMethod("PUT", `${RestApi.URL}/UpdateSystem?id=${id}`, body);
    static Authenticate = (body) => RestApi.httpMethod("POST", `${RestApi.URL}/Authenticate`, body);
    static GetOcorrencias = (body) => RestApi.httpGet(`${RestApi.URL}/ocorrencia`, body);
}