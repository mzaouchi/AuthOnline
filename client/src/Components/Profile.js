import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { currentUser } from "../Redux/Actions/UsersActions"

const Profile = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(currentUser())
    },[])

    const user = useSelector(state => state.UsersReducer.user)

  return (
    <div>
      <h1>Profile</h1>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  )
}

export default Profile