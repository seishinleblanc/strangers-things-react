// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// const COHORT_NAME = '2306-FTB-ET-WEB-FT';
// const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// export default function SinglePost () {
//     const [post, setPost] = useState({})
//     const {title} = useParams()

//     useEffect(() => {
//         async function fetchData() {
//             const response = await fetch (`https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`)
//             const data = await response.json()

//             // setPost(`${data.data.title}`)
//         }
//         fetchData()
//     }, [])
// }
// console.log(post)