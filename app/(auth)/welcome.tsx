import { router } from 'expo-router';
import { Image, StatusBar } from 'react-native';
import { Box } from '@/components/ui/box';
import { CircleLogo, FullLogo, Icon } from '@/components/ui/icon';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function ConfirmationScreen() {
    return (
        <Box className="flex-1 bg-background-0 relative ">
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <Box className='bg-black/30 absolute z-10 w-full h-full'>
            </Box>

            <Image
                source={require('@/assets/welcome.png')}
                resizeMode="cover"
                className="absolute w-full h-full z-0"
            />

            <Box className="z-10 mt-24 px-6 items-center">
                <Box className="flex-row items-center gap-2">
                    <Icon
                        as={CircleLogo}
                        width={50}
                        height={50}
                        className="text-primary-500 h-10 w-fit"
                        style={{ padding: 4 }}
                    />
                    <Icon
                        as={FullLogo}
                        width={140}
                        height={50}
                        className="text-primary-500 h-10 w-fit"
                        style={{ paddingLeft: 4 }}
                    />
                </Box>
                <Text>Turn spare change into bitcoin.</Text>
            </Box>

            <Box className="z-10 absolute bottom-10 w-full px-6">
                <Button className="w-full mb-3" onPress={() => router.push('/sign-up')}>
                    <ButtonText className="text-center">Sign Up</ButtonText>
                </Button>
                <Button className="w-full bg-white" variant='outline' onPress={() => router.push('/sign-in')}>
                    <ButtonText className="text-center font-bold">Log In</ButtonText>
                </Button>
            </Box>
        </Box>
    );
}
