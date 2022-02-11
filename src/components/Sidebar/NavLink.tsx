import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps {
	icon: ElementType,
	name: string,
	href: string
}
export function NavLink({icon, name, href}:NavLinkProps){
	return(
		<Link display="flex" align="center" href={href}>
			<Icon as={icon} fontSize="20"/>
			<Text ml="4" fontWeight="medium">{name}</Text>
		</Link>
	);
}