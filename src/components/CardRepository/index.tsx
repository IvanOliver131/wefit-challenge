import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

import miniLogo from "../../assets/mini-logo.png";

import {
  ButtonDesfavorite,
  ButtonFavorite,
  CardRepositoryContainer,
  CardRepositoryHeader,
  ChildText,
  CodeLanguage,
  Description,
  Divider,
  FavoriteCount,
  FooterCardRepository,
  HeaderTitle,
  HeaderTitleBold,
  Logo,
  TextDesfavorite,
  TextFavorite,
  TouchableContainer,
} from "./styles";

export interface RepositoryProps {
  id: number;
  full_name: string;
  description: string;
  watchers_count: string;
  language: string;
  svn_url: string;
  isFavorited: boolean;
}

interface CardRepositoryProps {
  data: RepositoryProps;
  handleAddOrRemoveToFavoriteList?: (repository: RepositoryProps) => void;
  favoriteScreen: boolean;
}

export function CardRepository({
  data,
  handleAddOrRemoveToFavoriteList,
  favoriteScreen,
}: CardRepositoryProps) {
  const { favoritesRepositories } = useSelector(
    (state: any) => state.favoritesRepositories
  );
  const navigation = useNavigation();
  const re = /\s*\/\s*/;
  const fullNames = data.full_name.split(re);

  function handleOpenDetails(data: RepositoryProps) {
    navigation.navigate("Details", data);
  }

  return (
    <TouchableContainer onPress={() => handleOpenDetails(data)}>
      <CardRepositoryContainer>
        <CardRepositoryHeader>
          <HeaderTitle numberOfLines={1}>
            {fullNames[0]}/<HeaderTitleBold>{fullNames[1]}</HeaderTitleBold>
          </HeaderTitle>
          <Logo source={miniLogo} />
        </CardRepositoryHeader>

        <Divider />

        <Description numberOfLines={2}>{data.description}</Description>
        <FooterCardRepository>
          {!favoriteScreen && (
            <>
              {favoritesRepositories.find(
                (favoriteRepository: RepositoryProps) =>
                  favoriteRepository.id === data.id
              ) ? (
                <ButtonDesfavorite
                  onPress={() => handleAddOrRemoveToFavoriteList(data)}
                >
                  <Ionicons
                    name="star"
                    color="#000000"
                    size={20}
                    style={{ marginRight: 6 }}
                  />
                  <TextDesfavorite>Desfavoritar</TextDesfavorite>
                </ButtonDesfavorite>
              ) : (
                <ButtonFavorite
                  onPress={() => handleAddOrRemoveToFavoriteList(data)}
                >
                  <Ionicons
                    name="star"
                    color="#FFD02C"
                    size={20}
                    style={{ marginRight: 6 }}
                  />
                  <TextFavorite>Favoritar</TextFavorite>
                </ButtonFavorite>
              )}
            </>
          )}
          <FavoriteCount>
            <Ionicons
              name="star"
              color="#FFD02C"
              size={20}
              style={{ marginRight: 6 }}
            />
            <ChildText>{data.watchers_count}</ChildText>
          </FavoriteCount>
          <CodeLanguage>
            <Ionicons
              name="ellipse"
              color="#F22828"
              size={16}
              style={{ marginRight: 6 }}
            />
            <ChildText>
              {data.language ? data.language : "Indefinida"}
            </ChildText>
          </CodeLanguage>
        </FooterCardRepository>
      </CardRepositoryContainer>
    </TouchableContainer>
  );
}
