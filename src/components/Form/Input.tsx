import { Input as ChakaraInput, FormLabel, FormControl, InputProps as ChakaraInputProps} from '@chakra-ui/react';

interface InputProps extends ChakaraInputProps{
	name: string;
	label?: string;
}
export function Input({name, label, ...rest}: InputProps){
	return(
		<FormControl>
			{ !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
						<ChakaraInput 
						name={name} 
						id={name}
						focusBorderColor="pink.500"
						bgColor="gray.900"
						variant="filled"
						_hover={{
							bgColor:'gray.900'
						}}
						size="lg"
						{...rest}
						/>
		</FormControl>
	)
} 