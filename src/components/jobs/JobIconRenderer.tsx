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
			colour: "#4285F450",
		},
		{
			name: "Facebook",
			icon: <IconBrandFacebook size={30} className="text-white" />,
			colour: "#1877F250",
		},
		{
			name: "Amazon",
			icon: <IconBrandAmazon size={30} className="text-white" />,
			colour: "#FF990050",
		},
		{
			name: "Microsoft",
			icon: <IconBrandWindows size={30} className="text-white" />,
			colour: "#F0500050",
		},
		{
			name: "Netflix",
			icon: <IconBrandNetflix size={30} className="text-white" />,
			colour: "#E5091450",
		},
		{
			name: "Spotify",
			icon: <IconBrandSpotify size={30} className="text-white" />,
			colour: "#1DB95450",
		},
		{
			name: "Twitter",
			icon: <IconBrandTwitter size={30} className="text-white" />,
			colour: "#1DA1F250",
		},
		{
			name: "Apple",
			icon: <IconBrandApple size={30} className="text-white" />,
			colour: "#4285F450",
		},
		{
			name: "LinkedIn",
			icon: <IconBrandLinkedin size={30} className="text-white" />,
			colour: "#0A66C250",
		},
		{
			name: "Adobe",
			icon: <IconBrandAdobe size={30} className="text-white" />,
			colour: "#FF000050",
		},
		{
			name: "Airbnb",
			icon: <IconBrandAirbnb size={30} className="text-white" />,
			colour: "#FF5A5F50",
		},
		{
			name: "TikTok",
			icon: <IconBrandTiktok size={30} className="text-white" />,
			colour: "#00000050",
		},
		{
			name: "Pinterest",
			icon: <IconBrandPinterest size={30} className="text-white" />,
			colour: "#E6002350",
		},
		{
			name: "Slack",
			icon: <IconBrandSlack size={30} className="text-white" />,
			colour: "#4A154B50",
		},
		{
			name: "Snapchat",
			icon: <IconBrandSnapchat size={30} className="text-white" />,
			colour: "#FFFC0050",
		},
		{
			name: "Zoom",
			icon: <IconBrandZoom size={30} className="text-white" />,
			colour: "#2D8CFF50",
		},
		{
			name: "Uber",
			icon: <IconBrandUber size={30} className="text-white" />,
			colour: "#09091A50",
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
