import {
  Avatar,
  Card,
  ItemStat,
  NameItem,
  ListStat,
  SpanItem,
  UserName,
  Tag,
  Location,
  Container,
} from "./Profile.styled";

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Container>
        <Avatar src={avatar} alt={name} />
        <UserName>{name}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Container>
      <ListStat>
        <ItemStat>
          <NameItem>Followers</NameItem>
          <SpanItem>{stats.followers}</SpanItem>
        </ItemStat>
        <ItemStat>
          <NameItem>Views</NameItem>
          <SpanItem>{stats.views}</SpanItem>
        </ItemStat>
        <ItemStat>
          <NameItem>Likes</NameItem>
          <SpanItem>{stats.likes}</SpanItem>
        </ItemStat>
      </ListStat>
    </Card>
  );
};
