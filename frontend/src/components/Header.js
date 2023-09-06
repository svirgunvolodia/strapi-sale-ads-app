import React, { useEffect, useState } from "react";
import { getHeaders } from "../services/Api.js";

import './Header.css'

const Header = () => {
    const [title, setTitle] = useState('')

    const fetchHeader = async () => {
        const res = await getHeaders()

        if (res.isSuccessful) {
            setTitle(res.data?.data[0]?.attributes?.title)
        }
    }

    useEffect(() => {
        fetchHeader()
    }, [])

    return (
        <header><h1>{title}</h1></header>
    )
}

export default Header