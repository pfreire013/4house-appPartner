import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, TouchBack, IconBack, Title } from './styles';

interface Props {
    title?: string,
    noBack?: boolean
}

const TopNav: React.FC<Props> = ({ title, noBack }) => {
    const navigation = useNavigation()

    function handleNavigationToBack () {
        navigation.goBack()
    }

    return (
        <Container>
            {
                !noBack ? (
                    <TouchBack
                        onPress={handleNavigationToBack}
                    >
                        <IconBack />
                    </TouchBack>
                ) : null
            }
            <Title>{title}</Title>
        </Container>
    )
}

export default TopNav;