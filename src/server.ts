import http from 'http';
import app from './index';

const server = http.createServer(app);
const Port = process.env.PORT || 3000;



server.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
});



