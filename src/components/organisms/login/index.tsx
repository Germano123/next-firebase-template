"use client";
import { Button } from "@/components/atom/button";
import { FormField } from "@/components/molecules/formfield";
import useLoginStore from "@/stores/useAuthStore";
import { useState } from "react";

export const Login = () => {
    const authStore = useLoginStore();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        authStore.login({ email, password });
    }

    return (
        <div className="px-12 py-20 w-fit h-fit
        border-2 border-slate-400 border-dashed
        rounded-2xl
        shadow-xl
        bg-slate-200">
            <form className="w-full h-full
            flex flex-col items-center justify-center gap-4">
                <FormField
                    full={ true }
                    label="Email"
                    placeholder="Email"
                    labelType="Fixed"
                />
                <FormField
                    full={ true }
                    label="Password"
                    placeholder="Password"
                    labelType="Fixed"
                />
                <Button
                    label="Login"
                    onClick={ () => {} }
                />
            </form>
        </div>
    );
}
