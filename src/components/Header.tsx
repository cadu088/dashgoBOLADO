import { Flex } from '@chakra-ui/react'
import { Logo } from './Header/Logo';
import { NotificationsNav } from './Header/NotificationsNav';
import { Profile } from './Header/Profile';
import { SearchBox } from './Header/SearchBox';

export function Header(){
	return(
		<Flex w="100%" as="header" maxWidth={1488} h="20" mx="4" px="6" align="center" >
			<Logo/>
			<SearchBox/>
			<Flex align="center" ml="auto">
				<NotificationsNav/>
				<Profile/>
			</Flex>
		</Flex>

	);
}