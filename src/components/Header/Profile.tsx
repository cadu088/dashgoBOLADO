import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile(){
	return(
		<Flex align="center">
					<Box mr="4" textAlign="right">
						<Text>Carlos Rodrigues</Text>
						<Text color="gray.300" fontSize="small">carloseduardors088@gmail.com</Text>
					</Box>
					<Avatar size="md"  src="https://github.com/cadu088.png"/>
				</Flex>
	);
}