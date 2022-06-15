import {
    Input,
    Header,
    SearchBar,
    ListEmpty,
    Container,
    FooterLoad,
    CardWrapper,
    SearchButton,
} from './styles'

import { BackHandler, Keyboard, StatusBar } from 'react-native';
import React, { useEffect, useRef, useState, useContext } from 'react';

import api from '../../services/api';
import { Load } from './commons/Load';
import theme from '../../styles/theme';
import { Icon } from '../../../helper/icon';
import { CharacterDto } from '../../Dtos/CharacterDto';
import { CharacterCard } from '../../components/CharacterCard';
import { FavoritesContext } from '../../contexts/favorites';

export const Home = () => {

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState<string>('')
    const [changeIcon, setChangeIcon] = useState(true)
    const [loadingList, setLoadingList] = useState(false)
    const [stopLoading, setKeepLoading] = useState(true)
    const [characters, setCharacters] = useState<CharacterDto[]>([])
    const { favoritesList, getFavorites }: any = useContext(FavoritesContext)

    const timerRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
        const back = BackHandler.addEventListener('hardwareBackPress', () => true)

        setPage(1)
        timerRef.current = setTimeout(() => {
            setCharacters([])
            getFavorites()
            getCharacters()
        }, 700)

        return () => back.remove()
    }, [search])

    const handleErase = () => {
        if (!changeIcon) {
            Keyboard.dismiss()
            setPage(1)
            setSearch('')
        }
    }

    const getCharacters = () => {
        setKeepLoading(true)
        setLoadingList(true)

        setTimeout(() => {
            api.get(`/character/?page=${page}&name=${search}`)
                .then((response) => setCharacters(
                    page > 1
                        ? characters.concat(response.data.results)
                        : response.data.results
                ))
                .catch((error) => {
                    console.log(error)
                    setKeepLoading(false)
                })
                .finally(() => {
                    setLoadingList(false)
                    setLoading(false)
                })
        }, 1500)
    }

    const loadNewCharacters = () => {
        setPage(page + 1)
        getCharacters()
    }

    const verifyFavorite = (item: any) => {
        const exist = Boolean(favoritesList.filter(
            (item2: { id: any; }) => item2.id == item.id).length > 0)
        return exist
    }

    const handleChangeIcon = (param: boolean) => {
        setChangeIcon(param)
    }

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor={theme.colors.shape_dark}
            />
            <Header>
                <SearchBar>
                    <Input
                        placeholder='Search Character'
                        placeholderTextColor={theme.colors.text}
                        onChangeText={text => {
                            setSearch(text)
                            clearTimeout(timerRef.current)
                            handleChangeIcon(false)
                        }}
                        value={search}
                        onEndEditing={() => handleChangeIcon(true)}
                    />
                    <SearchButton onPress={() => handleErase()} >
                        <Icon name={
                            changeIcon ? "search" : "close"}
                            lib={"EvilIcons"}
                            color={"black"}
                            size={25}
                        />
                    </SearchButton>
                </SearchBar>

            </Header>
            {
                loading
                    ? <Load />
                    : <CardWrapper
                        data={characters}
                        keyExtractor={(_item, index) => String(index)}
                        renderItem={({ item }) =>
                            <CharacterCard
                                data={item}
                                favorite={verifyFavorite(item)}
                            />}
                        showsVerticalScrollIndicator={false}
                        onEndReached={() => {
                            stopLoading && loadNewCharacters()
                        }}
                        onEndReachedThreshold={.8}
                        ListEmptyComponent={
                            loadingList
                                ? <></>
                                : <ListEmpty>We didn't find any results</ListEmpty>
                        }
                        ListFooterComponent={() =>
                            <FooterLoad>{loadingList ? <Load /> : <></>}</FooterLoad>
                        }
                    />
            }
        </Container>
    );
}