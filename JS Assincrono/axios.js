axios.get('https://api.github.com/users/igorth')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });