import { create } from 'zustand';

interface SignUpData {
    email: string,
    firstName: string,
    secondName: string,
    country: string,
}

export type signupSteps = keyof SignUpData;

interface SignUpState {
    step: signupSteps
    data: SignUpData;
    isLoading: boolean;

    setData: (key: signupSteps, value: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    reset: () => void;
}

const steps: signupSteps[] = ['email', "firstName", "secondName", "country"];
export const useSignUpStore = create<SignUpState>((set, get) => ({
    step: 'email',
    data: {
        email: '',
        firstName: '',
        secondName: '',
        country: '',
    },
    isLoading: false,

    setData: (key, value) =>
        set((state) => ({
            data: {
                ...state.data,
                [key]: value,
            },
        })),

    nextStep: () => {
        const currentStep = get().step;
        const currentStepIndex = steps.indexOf(currentStep);
        if (currentStepIndex < steps.length - 1)
            set({ step: steps[currentStepIndex + 1] });

    },
    prevStep: () => {
        const currentStep = get().step;
        const currentStepIndex = steps.indexOf(currentStep);
        if (currentStepIndex > 0)
            set({ step: steps[currentStepIndex - 1] });
    },
    reset: () => {
        set({
            step: 'email', data: {
                email: '',
                firstName: '',
                secondName: '',
                country: '',
            }
        })
    }

}));
