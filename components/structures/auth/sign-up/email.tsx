import { Input, InputField } from "@/components/ui/input";
import { useSignUpStore } from "@/stores/signup-store";
import { useState } from "react";
import { z } from 'zod';

const emailSchema = z.object({
    email: z.string().email('Invalid email'),
});
export function Email() {
    const { data, setData } = useSignUpStore();
    const [email, setEmail] = useState(data.email);
    if (emailSchema.safeParse({ email }).success) {
        setData('email', email);
    }
    return (
        <Input className="min-w-[250px]">
            <InputField
                type="text"
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
                placeholder="example@coinbits.app"
                className=""
            />
        </Input>
    )
};