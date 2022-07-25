import { useRef,useState,useEffect } from "react";
import createUserViaApi from "/Users/mosheyaakov/ReactLogin/login_app/src/repository/Repostiory.js"
import NewUserBoundary from "/Users/mosheyaakov/ReactLogin/login_app/src/models/NewUserBoundary.js"

const userRef=useRef();
const errRef=useRef();

const [user, setUser]=useState('');
const [validName, setValidNmae]=useState(false);
const [userFocus, setUserFocus]=useState(false);

const [pwd, setPwd]=useState('');
const [validPwd, setValidPwd]=useState(false);
const [pwdFocus, setPwdFocus]=useState(false);

const [matchPwd, setMatchPwd]=useState('');
const [validMatch, setValidMatch]=useState(false);
const [matchFocus, setMatchFocus]=useState(false);

const [errMsg, setErrMsg]=useState('');
const [success, setSuccess]=useState(false);

useEffect(()=>{
    userRef.current.focus();
},[])

useEffect(()=>{
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidNmae(result);

},[user])


useEffect(()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);

    const match=pwd===matchPwd;
    setValidMatch(match);

},[pwd,matchPwd])

useEffect(()=>{
    setErrMsg('');
},[user,pwd,matchPwd])

const handleSubmit=async (e)=>{
    e.preventDefault();

    const v1=USER_REGEX.test(user);
    const v2=PWD_REGEX.test(pwd);
    if(!v1||!v2){
        setErrMsg("Invalid Entry");
        return;
    }

    const {result,error}=await createUserViaApi(new NewUserBoundary("kanehhh@gmail.com","PLAYER",user,""))

    if(result!=null){
        setSuccess(true)

    }else{
        setErrMsg(error)
        errRef.current.focus()
    }
    
    

    
}
