import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/input"
import { useNavigate} from 'react-router-dom'

const Form = ({
    isSignInPage = true,
}
) => {
    const [data, setData] = useState({
        ...(isSignInPage && {
            fullName: ''
        }),
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    // console.log('data :>> ', data);
  return (
    <div className="bg-light h-screen flex items-center justify-center">
        <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
            <div className="text-xl font-light" mb-14>{isSignInPage ? 'Sign in to get explored':'Sign up to get started'}</div>
            <form className='flex flex-col items-center w-full' onSubmit={() => console.log('Submitted')}>
            { !isSignInPage && <Input label ="Full name" name ="Name" placeholder="Enter your Full Name" className="mb-6 w-[50%]" vaalue={data.fullName} onChange={(e) => setData({...data, fullName: e.target.value})} />}
            <Input label ="Email Address" type="email" name ="Name" placeholder="Enter your Email" className="mb-6 w-[50%]" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <Input label ="Password" name ="Name" placeholder="Enter your Password" className="mb-6 w-[50%]" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <Button label={isSignInPage ? 'Sign in': "Sign up"} type='submit' className="w-1/2 mb-2"/>
            </form>
            <div>{isSignInPage ? "Didn't have an account?" : "Already Have an account?"} <span className="text-primary cursor-pointer underline" onClick={() => navigate(`/users/${isSignInPage ? 'Sign_up' : 'sign_in'}`)}>{ isSignInPage ? 'Sign up' : 'Sign in'}</span></div>

        </div>
    </div>
  )
}

export default Form