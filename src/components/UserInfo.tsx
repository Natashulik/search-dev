
import {ReactComponent as IconLocation}  from "../assets/location.svg";
import {ReactComponent as IconWebsite}  from "../assets/web.svg";
import {ReactComponent as IconCompany}  from "../assets/company.svg";
import { GithubUser } from "../types/user";
import { InfoItemProps } from "./InfoItem";
import { InfoItem } from "./InfoItem";

interface UserInfoProps extends Pick<GithubUser, 'blog' | 'company' | 'location'> {}

export const UserInfo = ({ blog, company, location}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation />,
      text: location,
      isLocationLink: true,
    },
    {
      icon: <IconWebsite />,
      text: blog,
      isLink: true,
    },
    {
      icon: <IconCompany />,
      text: company,
    },
  ]

  return  <div className='user_info'>
      {items.map((item, index) => (
        <InfoItem {...item} key={index}/>
      ))}
    </div>
}