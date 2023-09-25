import { useNavigate } from "react-router-dom"


const ErrorPage = () => {
    const homeNavigate = useNavigate()
  return (
    <div className="w-fit mt-12 mx-auto">
        <h3 className="text-4xl font-bold">404, Error</h3>
        <h2 className="my-8 text-3xl">Page Not Found!!</h2>
        <button onClick={()=>homeNavigate("/")} className="btn btn-outline">Go Home</button>
    </div>
  )
}

export default ErrorPage