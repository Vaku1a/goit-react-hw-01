import { Avatar } from "../Avatar/Avatar.styled";
import { ItemStat } from "../ItemStat/ItemStat.styled";
import { ListStat } from "../ListStat/ListStat.styled";
import { Card } from "./Profile.styled";

export const Profile = ({ name, tag, location, image, stats }) => {
  console.log("name", name);
  return (
    <Card>
      <div>
        <Avatar src={image} alt={name} />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ListStat>
        <ItemStat>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </ItemStat>
        <ItemStat>
          <span>Views</span>
          <span>{stats.views}</span>
        </ItemStat>
        <ItemStat>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </ItemStat>
      </ListStat>
    </Card>
  );
};
