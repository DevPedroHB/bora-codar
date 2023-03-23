import { User } from "phosphor-react";
import { AvatarFallback, AvatarImage, AvatarRoot } from "./styles";

interface IAvatar {
  avatarSize: number;
  imgUrl?: string;
  altText?: string;
}

export function Avatar({
  avatarSize,
  imgUrl,
  altText = "Imagem de avatar",
}: IAvatar) {
  return (
    <AvatarRoot css={{ "--avatar-size": `${avatarSize / 16}rem` }}>
      <AvatarImage src={imgUrl} alt={altText} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarRoot>
  );
}
