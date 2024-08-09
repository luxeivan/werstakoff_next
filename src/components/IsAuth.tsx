'use client'
import React from 'react'
import { signOut, useSession } from "next-auth/react";
import { Button, Typography } from 'antd';

export default function IsAuth() {
    const session = useSession()
    return (
        <>
            {session && <>
                <Typography.Title level={2}>Авторизирован</Typography.Title>
                
                <Button onClick={() => signOut()}>Exit</Button>
            </>}

        </>

    )
}
