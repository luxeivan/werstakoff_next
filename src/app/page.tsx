import Image from "next/image";
import styles from "./page.module.css";
import { Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SignIn from "@/components/sign-in";
import { signIn } from "@/services/auth"
import IsAuth from "@/components/IsAuth";
import { SessionProvider } from "next-auth/react";

type Values = {
  email: string,
  password: string
}
export default function Home() {

  const handlerOnFinish = async (values: Values) => {
    "use server"
    console.log(values)
    const formData = new FormData()
    formData.append('email', values.email);
    formData.append('password', values.password);
    await signIn("credentials", formData)
  }
  return (
    <SessionProvider>
    <Layout>
      <Header>Header</Header>
      <Layout style={{ height: "100vh" }}>
        <Sider width="25%">
          Sider
        </Sider>
        <Content>
          <SignIn handlerOnFinish={handlerOnFinish} />
          <IsAuth />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </SessionProvider>
  );
}
