import React, { useState, useEffect } from 'react'
import axios from 'axios'

const handleClick = (company) => {
    // first thing you need to check if if there is a user logged in or not
    // if the user is logged in, gg
    // if the user is not logged in, go to login, or sign up screen

    let user = JSON.parse(localStorage.getItem("user"));

    if (user === null) {
        alert("Login or Create an Account First")
        window.location.href = '/login'
    }
    else {
        let ticker = company._id
        let data = {
            ticker
        }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/v1/user/watchlist',
            headers: {
                'Authorization': 'Bearer ' + user.token.token,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });


    }


}

function CompanyList() {
    const [companies, setCompanies] = useState(null)

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/v1/company/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setCompanies(response.data['companies']);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [])
    return (
        companies ? <div>
            {
                companies.map((company) => <p onClick={() => handleClick(company)}>{company.ticker}</p>)
            }
        </div> : ""
    )
}

export default CompanyList