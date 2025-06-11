import { Input, InputField } from "@/components/ui/input";
import { useSignUpStore } from "@/stores/signup-store";
import { useState } from "react";
import { z } from 'zod';

const nameSchema = z.object({
    name: z.string().email('Invalid email'),
});
export function FirstName() {
    const { data, setData } = useSignUpStore();
    const [name, setName] = useState(data.email);
    if (nameSchema.safeParse({ name }).success) {
        setData('firstName', name);
    }
    return (
        <Input className="min-w-[250px]">
            <InputField
                type="text"
                autoCapitalize="none"
                onChangeText={setName}
                value={name}
                placeholder="your-name"
                className=""
            />
        </Input>
    )
};