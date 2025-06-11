import { Country } from '@/components/structures/auth/sign-up/country';
import { Email } from '@/components/structures/auth/sign-up/email';
import { FirstName } from '@/components/structures/auth/sign-up/first-name';
import { LastName } from '@/components/structures/auth/sign-up/last-name';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { signupSteps, useSignUpStore } from '@/stores/signup-store';

const renderSteps: Record<signupSteps, React.ReactNode> = {
    email: <Email />,
    country: <Country />,
    firstName: <FirstName />,
    secondName: <LastName />,
}

export default function SignIn() {
    const { step, data, nextStep } = useSignUpStore();
    return (
        <Box className="flex-1 bg-background-0 items-center">
            {renderSteps[step]}
            <Button className="w-full mb-3" onPress={nextStep} isDisabled={!!data[step]}>
                <ButtonText className="text-center">Next</ButtonText>
            </Button>
        </Box>
    );
}
