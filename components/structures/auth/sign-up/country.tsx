import { Box } from '@/components/ui/box';
import { memo, useCallback, useMemo, useState } from "react";
import { Text } from '@/components/ui/text';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { ChevronRight, Search, X } from 'lucide-react-native';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetFlatList, ActionsheetItem, ActionsheetSectionHeaderText, ActionsheetSectionList } from '@/components/ui/actionsheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Dimensions, FlatList, Pressable, SectionList } from 'react-native';
import { Icon } from '@/components/ui/icon';
import { countryCodes, CountryButton, CountryList } from 'react-native-country-codes-picker';
import { Input, InputField, InputIcon } from '@/components/ui/input';
import { FlashList } from '@shopify/flash-list';



const countryCodesEn = countryCodes.map((country) => ({
    name: {
        en: country.name.en
    },
    dial_code: country.dial_code,
    code: country.code,
    flag: country.flag

}))

export interface CountryItem {
    name: { [key: string]: string },
    dial_code: string,
    code: string,
    flag: string
}


function CountryChooser({ show, onSelect }) {
    const [searchString, setSearchString] = useState<string>("");
    const filteredCountries = useMemo(() => {
        if (!searchString.trim()) return countryCodesEn;
        const search = searchString.toLowerCase();
        return countryCodesEn.filter(country =>
            country.name['en'].toLowerCase().includes(search)
        );
    }, [searchString]);

    const getItemLayout = useCallback((data, index) => ({
        length: Dimensions.get('window').width,
        offset: 50 * index,
        index,
    }), []);
    const countries = useMemo(() => {
        const popularCountries = filteredCountries.filter(country => country.code === 'US');
        const otherCountries = filteredCountries.filter(country => country.code !== 'US');

        const sections = [];
        if (popularCountries.length > 0) {
            sections.push({ title: "Popular", data: popularCountries });
        }
        if (otherCountries.length > 0) {
            sections.push({ title: "Other", data: otherCountries });
        }
        return sections;
    }, [filteredCountries]);
    const renderCountry = useCallback(({ item }: { item: CountryItem }) => (
        <Text>{item.name['en']}</Text>
    ), []);

    const renderCountryHeader = useCallback(({ section: { title } }) => (
        <Box className='flex-row gap-4 items-center'>
            <ActionsheetSectionHeaderText bold={false} size='md' className='!text-typography-0'>
                <Text>
                    {title}
                </Text>
            </ActionsheetSectionHeaderText>
            <Box className='border border-typography-500 w-full h-[0.5]'></Box>
        </Box>
    ), []);

    const handleClose = useCallback(() => onSelect(false), [onSelect]);

    const EmptyComponent = useCallback(() => (
        <Box className="p-4 items-center">
            <Text>No countries found</Text>
        </Box>
    ), []);

    return (
        <Actionsheet isOpen={show} onClose={handleClose}>
            <ActionsheetBackdrop />
            <SafeAreaView edges={['top', 'bottom']} style={{ marginTop: Constants.statusBarHeight }}>
                <ActionsheetContent transition={{ type: 'spring' }}>
                    <ActionsheetDragIndicatorWrapper className="flex flex-row items-start justify-center border-b border-typography-50">
                        <Pressable className="h-7 w-7 rounded-full" onPress={handleClose}>
                            <Icon as={X} size="xl" />
                        </Pressable>
                        <Input className='w-full'>
                            <InputField
                                value={searchString}
                                onChangeText={setSearchString}
                                type="text"
                                autoCapitalize="none"
                                placeholder="Choose A Country"
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                            />
                            <InputIcon as={Search} className='mr-4' />
                        </Input>
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetSectionList
                        sections={countries}
                        renderItem={renderCountry}
                        renderSectionHeader={renderCountryHeader}
                        keyExtractor={(item, index) => '' + item + index}
                        ListEmptyComponent={EmptyComponent}
                        getItemLayout={getItemLayout}
                        keyboardShouldPersistTaps={'handled'}
                        removeClippedSubviews={true}
                        initialNumToRender={countryCodesEn.length / 2}
                        maxToRenderPerBatch={countryCodesEn.length / 2}
                        windowSize={21}
                    />
                </ActionsheetContent>
            </SafeAreaView>
        </Actionsheet>
    );
}
export function Country() {
    const [show, setShow] = useState(false);

    const renderCountry = useCallback(({ item }: { item: CountryItem }) => (
        <Text>{item.name['en']}</Text>
    ), []);
    return (
        <Box className="flex-1 bg-background-0 items-center">
            <Text>What country are you in?</Text>
            <Button variant='outline' onPress={() => setShow(!show)}>
                <ButtonText>Country</ButtonText>
                <ButtonIcon as={ChevronRight}></ButtonIcon>
            </Button>
            {show &&
                <FlashList
                    data={countryCodesEn}
                    renderItem={renderCountry}
                    keyExtractor={(item, index) => '' + item + index}
                    keyboardShouldPersistTaps={'handled'}
                    removeClippedSubviews={true}
                    onEndReachedThreshold={0.1}
                />
            }

        </Box>
    );
}
