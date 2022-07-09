// callback function

        // Login
        // Posts
        // Create Posts

        // Order
        // Order making

console.log("start");

    const Login = (username , password, callback) => {
        setTimeout( () => {
            callback({username:username ,email:"xyz@gmail.com" })
        },1000);
    }

    const getPostByUserName = (username,callback) => {
        setTimeout(()=> {
            callback(["Post-1","Post-2","Post-3"]);
        },2000)
    }

    const getPostDEtails = (Post,callback) => {
        setTimeout( () => {
            callback("post details")
        },1000)
    }

    Login("Hasan_Ylmz","xyz912yxz",user => {
        console.log(user);
        console.log(user.email);
        
        getPostByUserName(user.username , (posts) => {
            console.log(posts);

            getPostDEtails(posts[0] , (details) => {
                console.log(details);
            });
        });
    }); 

console.log("END");