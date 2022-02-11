import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect, } from 'react';


type sidebarDrawerContextData = UseDisclosureReturn
interface sidebarDrawerProviderProps{children: ReactNode;}
const SidebarDrawerContext = createContext({} as sidebarDrawerContextData);


export function SidebarDrawerProvider({children}: sidebarDrawerProviderProps){
	const disclosure = useDisclosure();
	const router = useRouter();

	useEffect(() => {
		disclosure.onClose();
	}, [router.asPath])
	return(
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	)
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);