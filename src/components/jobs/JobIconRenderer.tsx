import {
	IconBrandAdobe,
	IconBrandAmazon,
	IconBrandApple,
	IconBrandFacebook,
	IconBrandGoogle,
	IconBrandLinkedin,
	IconBrandNetflix,
	IconBrandSpotify,
	IconBrandTwitter,
	IconBrandWindows,
	IconBrandAirbnb,
	IconBrandTiktok,
	IconBrandPinterest,
	IconBrandSlack,
	IconBrandSnapchat,
	IconBrandZoom,
	IconBrandUber,
} from "@tabler/icons-react";
import { FC } from "react";

export const JobIconRenderer: FC<{
	company: string;
}> = ({ company }) => {
	const icons = [
		{
			name: "Google",
			icon: <IconBrandGoogle size={30} className="text-white" />,
			colour: "#4285F4",
		},
		{
			name: "Facebook",
			icon: <IconBrandFacebook size={30} className="text-white" />,
			colour: "#1877F2",
		},
		{
			name: "Amazon",
			icon: <IconBrandAmazon size={30} className="text-white" />,
			colour: "#FF9900",
		},
		{
			name: "Microsoft",
			icon: <IconBrandWindows size={30} className="text-white" />,
			colour: "#F05000",
		},
		{
			name: "Netflix",
			icon: <IconBrandNetflix size={30} className="text-white" />,
			colour: "#E50914",
		},
		{
			name: "Spotify",
			icon: <IconBrandSpotify size={30} className="text-white" />,
			colour: "#1DB954",
		},
		{
			name: "Twitter",
			icon: <IconBrandTwitter size={30} className="text-white" />,
			colour: "#1DA1F2",
		},
		{
			name: "Apple",
			icon: <IconBrandApple size={30} className="text-white" />,
			colour: "#4285F4",
		},
		{
			name: "LinkedIn",
			icon: <IconBrandLinkedin size={30} className="text-white" />,
			colour: "#0A66C2",
		},
		{
			name: "Adobe",
			icon: <IconBrandAdobe size={30} className="text-white" />,
			colour: "#FF0000",
		},
		{
			name: "Airbnb",
			icon: <IconBrandAirbnb size={30} className="text-white" />,
			colour: "#FF5A5F",
		},
		{
			name: "TikTok",
			icon: <IconBrandTiktok size={30} className="text-white" />,
			colour: "#000000",
		},
		{
			name: "Pinterest",
			icon: <IconBrandPinterest size={30} className="text-white" />,
			colour: "#E60023",
		},
		{
			name: "Slack",
			icon: <IconBrandSlack size={30} className="text-white" />,
			colour: "#4A154B",
		},
		{
			name: "Snapchat",
			icon: <IconBrandSnapchat size={30} className="text-white" />,
			colour: "#FFFC00",
		},
		{
			name: "Zoom",
			icon: <IconBrandZoom size={30} className="text-white" />,
			colour: "#2D8CFF",
		},
		{
			name: "Uber",
			icon: <IconBrandUber size={30} className="text-white" />,
			colour: "#09091A",
		},
	];

	return (
		<div>
			{icons.map((icon) => {
				if (company === icon.name) {
					return (
						<div
							key={icon.name}
							className="p-2 rounded-md"
							style={{ backgroundColor: icon.colour }}
						>
							{icon.icon}
						</div>
					);
				}
			})}
		</div>
	);
};
