import axios from 'axios';
import React, {useState, useRef, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AllContext } from '../context/AllContext'


const LoginJoinBLock = styled.div`
    margin-top:150px;
    display:flex;
    column-gap:120px;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    @media screen and (max-width: 1200px) {
        display:inline-block;
        width:90%;
        margin:30px 30px;
    }
`

const LoginBlock = styled.div`
@media screen and (max-width: 1200px) {
    margin-top:100px;
  }
        .login{ 
            border:.1rem solid #eaeaea; 
            padding:50px 30px;
                max-width:600px; margin:0 auto;
                p{ text-align:center; font-size:25px; margin:30px 0;}
                form{
                    .intext{ width:100%; padding:10px 10px; border:.1rem solid #959595; 
                        margin-bottom:30px;
                    }
                    button{ display:block; padding:20px 0; background:#5c5d5f; margin:20px 0; color:#fff; width:100%;
                    }
                    label{font-size:14px; color:#959595; line-height:2; }
                }
        }
`

const JoinBlock = styled.div`
        .join{ 
            border:.1rem solid #eaeaea; 
            padding:50px 30px;
                max-width:600px; margin:0 auto;
                p{ text-align:center; font-size:25px; margin:30px 0;}
                form{
                    .intext{ width:100%; padding:10px 10px;  border:.1rem solid #959595; 
                        margin-bottom:30px;
                    }
                    button{ display:block; padding:20px 0; background:#5c5d5f;  margin:20px 0; color:#fff; width:100%;
                    }
                    label{font-size:14px; color:#959595; line-height:1;}
                }
        }

`
const LoginJoin = () => {

    const navigate = useNavigate()
    const {setLogged} = useContext(AllContext)

    const rname = useRef()
    const rid = useRef()
    const rpw = useRef()
    const lrid = useRef()
    const lrpw = useRef()

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pwok, setPwok] = useState('')
    const [gender, setGender] = useState('')
    const [message, setMessage] = useState('아이디 중복체크')
    const [lid, setLid] = useState('')
    const [lpw, setLpw] = useState('')

    const idCheck = (e)=>{
        setId(e.target.value)
        if (e.target.value) {
            axios.post('http://thombrowneproject.cafe24app.com/auth/idcheck', {
                // 호스팅 할때  => 'http://thombrowneproject.cafe24app.com/auth/idcheck' 
                // 개발 환경일때 => 'http://localhost:3000/auth/idcheck'

                userid : e.target.value
            }).then((res)=>{
                console.log(res)
                if (res.data[0]) {
                    setMessage('중복된 아이디입니다.')
                } else {
                    setMessage('가능한 아이디입니다.')
                }
            })
        }
    }

    const register = (e)=>{
        e.preventDefault();
        if (!name) {
            alert('이름을 입력하세요.')
            rname.current.focus()
            return false
        }
        if (!gender) {
            alert('성별을 선택하세요.')
            return false
        }
        if (!id) {
            alert('아이디를 입력하세요.')
            rid.current.focus()
            return false
        }
        if (!pw) {
            alert('비밀번호를 입력하세요.')
            rpw.current.focus()
            return false
        } else if (!pwok) {
            alert('비밀번호를 정확히 입력하세요.')
            rpw.current.focus()
            return false
        } else if (pw!==pwok) {
            alert('비밀번호를 정확히 입력하세요.')
            rpw.current.focus()
            return false
        }
        if (message!=='가능한 아이디입니다.') {
            alert('중복된 아이디입니다.')
            rid.current.focus()
            return false
        }
            axios.post('http://thombrowneproject.cafe24app.com/auth/join', {
                username : name,
                userid : id,
                userpw : pw,
                gender : gender
            }).then((res)=>{
                console.log(res)
                if (res.data.affectedRows===1) alert('회원가입 성공')
                else alert('회원가입 실패')
                navigate('/')
            }).catch(err=>console.log(err))
    }


            const loging = () => {
                if (!lid) {
                    alert('아이디를 입력하세요.')
                    lrid.current.focus()
                    return false
                }
                if (!lpw) {
                    alert('비밀번호를 입력하세요.')
                    lrpw.current.focus()
                    return false
                } 
                axios.post('http://thombrowneproject.cafe24app.com/auth/login', {
                    userid : lid,
                    userpw : lpw
                 }).then((res) => {
                console.log(res);
                    if (res.data[0]) {
                      window.sessionStorage.setItem("id", lid); 
                      setLogged(lid)
                      alert(`[ ${lid} ]님께서 로그인하셨습니다. 환영합니다! `)
                      navigate("/");
                    } else {
                      alert("아이디, 패스워드가 정확하지 않습니다.");
                      lrid.current.value = "";
                      lrpw.current.value = "";
                    }
                })
                .catch((err) => {
                console.log(err);
                });


            }


    return (
        <LoginJoinBLock>
            <LoginBlock>
                <div className="login">
                    <p>기존회원</p>
                    <form>
                        <label>아이디* </label>
                        <input className="intext" ref={lrid} type="text" placeholder="아이디"  value={lid} onChange={(e)=>setLid(e.target.value)} /> 

                        <label>비밀번호*</label>
                        <input className="intext"  ref={lrpw} type="password" placeholder="비밀번호" value={lpw} onChange={(e)=>setLpw(e.target.value)} />

                        <button onClick={loging} type="button">로그인</button>
                    </form>
                    <img src="/images/logo2.png" alt="" />
                </div>
            </LoginBlock>
    
            <JoinBlock>
                <div className="join">
                <p>신규회원</p>
                    <form onSubmit={register}>
                        <label>이름*</label>
                        <input ref={rname} className="intext" type="text" placeholder="이름" value={name} onChange={(e)=>setName(e.target.value)} />

                        <label>성별 : </label>
                        남 <input type="radio" checked={gender==='m'} onChange={()=>setGender('m')} style={{ marginRight:'10px'}} />
                        여 <input type="radio" checked={gender==='w'} onChange={()=>setGender('w')} />
                        <br/><br/>

                        <label>아이디*</label>
                        <span>&nbsp; {message}</span>
                        <input className="intext" ref={rid} type="text" placeholder="아이디"  value={id} onChange={idCheck} /> 
                  

                        <label>비밀번호*</label>
                        <input className="intext"  ref={rpw} type="password" placeholder="비밀번호" value={pw} onChange={(e)=>setPw(e.target.value)} />

                        <label>비밀번호 확인*</label>
                        <input className="intext" type="password" value={pwok} onChange={(e)=>setPwok(e.target.value)} placeholder="비밀번호 확인" />

                        <button type="submit">회원가입</button>
                    </form>
                </div>
    
            </JoinBlock>
        </LoginJoinBLock>
    );
};

export default LoginJoin;