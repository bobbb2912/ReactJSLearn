import React from 'react'
import {routerData} from './ultils/globalFunction';
import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Menu() {
    const navigate = useNavigate();

    return (
        <ul>
      {routerData.map((i, key) => {
        return (
          <Link
            to={i.path}
            style={{cursor: 'pointer', marginRight: '20px'}}
            // onClick={() => {
            //   navigate(i.path);
            // }}
            key={key}
          >
            {i.name}
          </Link>
        );
      })}
    </ul>
    )
}
