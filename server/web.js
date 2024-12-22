import express from 'express'     // 웹서버 생성을 위해 express 관련 파일을 가져옴
const app = express()                   // express는 함수이므로 반환값을 변수에 저장함 
const PORT = process.env.port || 8001;   // 서버 오픈을 위한 포트 지정(카페24는 8001번)
                                        // 포트 번호 : 0~65,535
                                        // 주요 통신을 위한 규약에 이미 정해진 번호 : 0~1023
                                        // 특정 프로토콜이나 어플리케이션에서 사용하는 번호 : 1024~49151
                                        // 어플리케이션에서 혹은 임시 사용번호 : 49152~65535
import path from 'path'            // nodejs에 내장된 라이브러리. 설치없이 바로 사용함
import cors from 'cors'            // 교차출처 허용을 위한 라이브러리
const corsOptions = {
    origin:'http://thombrowneproject.cafe24app.com', credentials:true
}
app.use(cors(corsOptions))      // app.use() : 미들웨어 함수를 애플리케이션에 등록하는 함수
app.use(express.json())         // 사용자의 json 요청을 처리하여 req.body 객체에 저장해줌
// const proxy = require('http-proxy-middleware')

import globalRouter from '/home/hosting_users/tkdghks629/apps/tkdghks629_thombrowneproject/router/globalRouter.js'
import authRouter from '/home/hosting_users/tkdghks629/apps/tkdghks629_thombrowneproject/router/authRouter.js'
// import productRouter from './router/productRouter.js'

// 리소스 파일들을 관리하는 경로 지정하기
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/home/hosting_users/tkdghks629/apps/tkdghks629_thombrowneproject/build')))

app.use('/', globalRouter)
app.use('/auth', authRouter)
// app.use('/product', productRouter)


app.use('*', globalRouter)

// 지정한 포트에서 서버를 실행함
app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))
