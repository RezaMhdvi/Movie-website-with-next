import { Divider } from "antd";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from './layout.module.css'
import {useRouter} from "next/router"
import Link from "next/link";


const Layout = ({children}) => {  //functional component
    const router = useRouter()
    return (
        <div>
            <Navbar className={styles.navbar} bg="dark" variant="dark">
                <Container className={styles.navbar}>
                <Navbar.Brand  href="#home"><img className={styles.navbar_img} src={"/favicon.ico"} /> تاپ فیلم</Navbar.Brand>
                <Divider style={{backgroundColor:"white !important"}} type="vertical" />
                <Nav className="me-auto">
                <Link className={styles.link} href={"/"}><Nav.Link active={router.pathname==="/"} href="#home">خانه</Nav.Link></Link>
                <Link className={styles.link} href={"/films"}><Nav.Link active={router.pathname.split("/")[1] == "/films"} href="#features">فیلم ها</Nav.Link></Link>
                </Nav>
                </Container>
                <Button className={styles.auth_button} variant="light">ورود</Button>
            </Navbar>
            <div>{children}</div>
        </div>
    );
}

export default Layout;
