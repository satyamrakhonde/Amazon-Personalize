export const call = (path) => {
    fetch(`http://localhost:3002/api/${path}`)
    .then(response => response.json())
          .then(data =>  {
            return data});
    
};