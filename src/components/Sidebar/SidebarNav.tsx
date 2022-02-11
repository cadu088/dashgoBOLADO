import { Stack} from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';


export function SidebarNav(){
	return(

	 		<Stack spacing="12" align="flex-start">
				<NavSection title="GERAL">
						<NavLink icon={RiDashboardLine} name="Dashboard" href="/dashboard"/>
						<NavLink icon={RiContactsLine} name="Usuarios" href="/users"/>
				</NavSection>

				<NavSection title="AUTOMAÇÃO">
					<NavLink icon={RiInputMethodLine} name="Formulários" href="/#"/>
					<NavLink icon={RiGitMergeLine} name="Automação" href="/#"/>
				</NavSection>

			</Stack>
	);
}