import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export async function DeletePost( {token}) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await response.json()
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}