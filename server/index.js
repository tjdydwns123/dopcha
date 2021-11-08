const express = require('express');
const router = express.Router();
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {auth} = require('./middleware/auth');
const {User} = require("./models/User");
const {Donate} = require("./models/Donate")
const config = require('./config/key'); 
//application/x-www-forn-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose')
//mongoose.connect('mongodb+srv://ssy:1234@cluster0.1bw63.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
//.then(() => console.log('MongoDB Connected...'))
//.catch((err)=> console.log('MongoDB error:',err))

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => console.log('mongoDB connected ....'))
.catch(err => console.log(err.meessage))

router.get("/api/hello", (req,res)=>{
  res.send({test: "hi"});
});

app.get('/api/hello', (req, res) => {
 res.send('Hello World! fnfnfn 하하하')})

app.post('/api/users/register',(req,res)=>{
  //회원가입시 필요한 정보들을 클라이언트에서 가져오면 db에 넣어줌
  const user = new User(req.body)
  user.save((err, user)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })

})

app.post('/api/users/login',(req, res)=>{
  //요청된 이메일이 데이터베이스에 있는지 
  User.findOne({email:req.body.email},(err,user)=>{
    if(!user){
      return res.json({
        loginSuccess: false,
        message:"제공된 이메일에 해당하는 유저가 없습니다."
        
      })
    }
  //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는지 확인

    user.comparePassword(req.body.password,(err,isMatch)=>{
      if(!isMatch)
        return res.json({loginSuccess: false, message:"비밀번호가 틀렸습니다." })
    

      //비밀번호가 같다면 토큰 생성
      user.generateToken((err,user)=>{
        if(err) return res.status(400).send(err);
        // 토큰을 cookie 에 저장-
        res.cookie("x_auth", user.token)
          .status(200)
          .json({loginSuccess: true, userId: user._id})

      })
    })
  })
})

app.get('/api/users/auth', auth ,(req, res)=>{

  //여기까지 미들웨어 통과해왔다 = 인증이 참이라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0? false:true,
    isAtuth: true,
    email: req.user.email,
    name:req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res)=>{
  User.findOneAndUpdate({_id: req.user._id},
    {token:""}
    ,(err,user)=>{
      if(err) return res.json({success:false, err});
      return res.status(200).send({
        success: true
      })
    })


})

app.post('/api/donate/Agency_Registering',(req,res)=>{
  //기부 글등록시 필요한 정보들을 클라이언트에서 가져오면 db에 넣어줌
  const donate = new Donate(req.body)
  donate.save((err, donate)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = router;