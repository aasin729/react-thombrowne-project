import express from 'express'
import path from 'path'

const globalRouter = express.Router()
const __dirname = path.resolve()
// 도메인 뒤에 붙은 주소랑 일치하면 실행되는 라우트 함수
globalRouter.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/home/hosting_users/tkdghks629/apps/tkdghks629_thombrowneproject/build/index.html'))
})
globalRouter.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/home/hosting_users/tkdghks629/apps/tkdghks629_thombrowneproject/build/index.html'))
})
export default globalRouter;